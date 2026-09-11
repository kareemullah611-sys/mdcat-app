import { isAllowedOrigin } from "@/lib/origin";
import { securityLog } from "@/lib/security-log";

export function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  return isAllowedOrigin(origin);
}

export function requireSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (origin !== null && !isAllowedOrigin(origin)) {
    securityLog("security.origin_mismatch", { origin });
    return false;
  }
  return true;
}