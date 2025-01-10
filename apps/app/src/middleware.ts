import { updateSession } from "@saas/supabase/middleware";
import { createI18nMiddleware } from "next-international/middleware";
import { type NextRequest, NextResponse } from "next/server";

const I18nMiddleware = createI18nMiddleware({
    locales: ["en", "fr"],
    defaultLocale: "en",
    urlMappingStrategy: "rewrite",
});

const allowedRoutes = ["/login", "/sign-up", "/forgot-password", "/"]; // TODO: Remove "/""

export async function middleware(request: NextRequest) {
    const { response, user } = await updateSession(
        request,
        I18nMiddleware(request),
    );

    const isAllowedRoute = allowedRoutes.some(route => request.nextUrl.pathname.endsWith(route));

    if (!isAllowedRoute && !user) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return response;
}

export const config = {
    matcher: [
        "/((?!_next/static|api|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
