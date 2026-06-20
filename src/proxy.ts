import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AUTH_ROUTES, DEFAULT_LOGIN_REDIRECT } from '@/shared/config'

export default async function proxy(req: NextRequest) {
    const token = req.cookies.get('access_token')?.value;
    const isAuthRoute = AUTH_ROUTES.includes(req.nextUrl.pathname);

    if (!token) {
        if (isAuthRoute) {
            return NextResponse.next();
        }
        return NextResponse.redirect(new URL('/login', req.url));
    }

    if (token && isAuthRoute) {
        return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
    }

    return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/perfil/:path*', '/login'],
};