import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const token =
    cookies().get("__Secure-next-auth.session-token") ||
    cookies().get("next-auth.session-token");

  const pathname = request.nextUrl.pathname;

  // Allow all API routes to pass through
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // If not authenticated, redirect to login
  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url),
    );
  }

  return NextResponse.next();
}

// Only apply middleware to protected routes
export const config = {
  matcher: ["/my-booking/:path*", "/services/:path*"],
};
