import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Verifica se o pathname já tem o locale
  const pathnameIsMissingLocale = ['/en', '/pt'].every(
    (locale) => !pathname.startsWith(`${locale}/`) && pathname !== locale
  )

  // Se não tiver, redireciona para o padrão (pt)
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/pt${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    )
  }
}

export const config = {
  // O matcher é vital para o Next.js não tentar rodar o middleware em arquivos estáticos
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|content|.*\\.png$).*)',
  ],
}