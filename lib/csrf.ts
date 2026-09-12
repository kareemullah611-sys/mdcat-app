import { isAllowedOrigin } from "@/lib/origin";
import { securityLogOriginMismatch } from "@/lib/security-log";

export function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  return isAllowedOrigin(origin);
}

export function requireSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (origin !== null && !isAllowedOrigin(origin)) {
    securityLogOriginMismatch(origin);
    return false;
  }
  return true;
}