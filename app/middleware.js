import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const protectedPaths = ["/dashboard", "/checkout", "/admin"];

  const hasAuthToken = req.cookies.get("sb-access-token");

  if (protectedPaths.some((path) => url.pathname.startsWith(path))) {
    if (!hasAuthToken) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
