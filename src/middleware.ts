import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('user')?.value
    if (!currentUser && request.nextUrl.pathname !== '/') {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (currentUser && request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/dashboard/:path*'],
}