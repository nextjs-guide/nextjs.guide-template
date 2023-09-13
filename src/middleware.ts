import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/getting-started') {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if (request.nextUrl.pathname.includes('/docs')) {
    const newURL = request.nextUrl.pathname.replace('/docs', '')
    return NextResponse.rewrite(new URL(newURL, request.url))
  }
}
