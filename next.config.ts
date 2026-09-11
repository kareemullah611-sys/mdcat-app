import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Static CSP (Next.js "without nonces" documented approach). The app is fully
// self-contained (no third-party origins). script-src keeps 'unsafe-inline'
// because statically-prerendered pages (/login etc.) carry inline bootstrap
// scripts that cannot receive a request-time nonce.
const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "worker-src 'self'",
  "frame-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders: NonNullable<NextConfig["headers"]> = async () => {
  const common = [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
    { key: "X-Frame-Options", value: "SAMEORIGIN" },
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  ];

  return [
    // Messages, pages, and everything else: strict policy. No length limits.
    {
      source: "/:path*",
      headers: [
        ...common,
        { key: "Content-Security-Policy", value: CSP },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ],
    },
    // Service worker: never cache the registration script.
    {
      source: "/sw.js",
      headers: [{ key: "Cache-Control", value: "no-cache, no-store, must-revalidate" }],
    },
    // All API responses are private to the browser session (never shared caches).
    // Dynamic pages already emit no-store via Next.js; static assets keep their
    // immutable hashed caching.
    {
      source: "/api/:path*",
      headers: [{ key: "Cache-Control", value: "private, no-store" }],
    },
  ];
};

const nextConfig: NextConfig = {
  poweredByHeader: false,
  headers: securityHeaders,
};

export default nextConfig;