import { updateSession } from "@saas/supabase/middleware";
import { createClient } from "@saas/supabase/server";
import { createI18nMiddleware } from "next-international/middleware";
import { type NextRequest, NextResponse } from "next/server";

const I18nMiddleware = createI18nMiddleware({
    locales: ["en", "fr"],
    defaultLocale: "en",
    urlMappingStrategy: "rewrite",
});

export async function middleware(request: NextRequest) {
    const { response, user } = await updateSession(request, I18nMiddleware(request))
    const supabase = createClient()
    const url = new URL("/", request.url)
    const nextUrl = request.nextUrl

    const pathnameLocale = nextUrl.pathname.split("/", 2)?.[1]

    // Remove the locale from the pathname
    const pathnameWithoutLocale = pathnameLocale
        ? nextUrl.pathname.slice(pathnameLocale.length + 1)
        : nextUrl.pathname

    // Create a new URL without the locale in the pathname
    const newUrl = new URL(pathnameWithoutLocale || "/", request.url)

    const {
        data: { session }
    } = await supabase.auth.getSession()

    const publicRoutes = ["/login", "/sign-up", "/forgot-password"]

    // Not authenticated
    if (
        !session &&
        !publicRoutes.includes(newUrl.pathname)
    ) {
        const encodedSearchParams = `${newUrl.pathname.substring(1)}${newUrl.search
            }`

        const url = new URL("/login", request.url)

        if (encodedSearchParams) {
            url.searchParams.append("return_to", encodedSearchParams)
        }

        return NextResponse.redirect(url)
    }

    // Authenticated user trying to access public routes
    if (session && publicRoutes.includes(newUrl.pathname)) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    return response
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|api|monitoring).*)"
    ]
};
