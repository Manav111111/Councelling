import { NextResponse, type NextRequest } from "next/server";

const protectedPrefixes = ["/dashboard"];
const adminPrefixes = ["/admin"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hasSession = request.cookies.get("ipu_session")?.value === "1";
  const isAdmin = request.cookies.get("ipu_role")?.value === "admin";

  if (protectedPrefixes.some((prefix) => pathname.startsWith(prefix)) && !hasSession && !request.nextUrl.searchParams.has("login")) {
    return NextResponse.redirect(new URL("/dashboard?login=1", request.url));
  }

  if (adminPrefixes.some((prefix) => pathname.startsWith(prefix)) && !isAdmin) {
    return NextResponse.redirect(new URL("/dashboard?admin=required", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"]
};
