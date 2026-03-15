import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ─── Redis Client ─────────────────────────────────────────────────────────────

const redis = new Redis({
  url:   process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// ─── Rate Limiters ────────────────────────────────────────────────────────────

/**
 * Contact form: max 5 submissions per IP per minute.
 */
export const contactRatelimit = new Ratelimit({
  redis,
  limiter:   Ratelimit.slidingWindow(5, "1 m"),
  analytics: true,
  prefix:    "ratelimit:contact",
});

/**
 * General API: max 30 requests per IP per minute.
 */
export const apiRatelimit = new Ratelimit({
  redis,
  limiter:   Ratelimit.slidingWindow(30, "1 m"),
  analytics: true,
  prefix:    "ratelimit:api",
});

// ─── Helper ───────────────────────────────────────────────────────────────────

/**
 * Extract real client IP — handles Vercel + Cloudflare proxy headers.
 */
export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "127.0.0.1"
  );
}