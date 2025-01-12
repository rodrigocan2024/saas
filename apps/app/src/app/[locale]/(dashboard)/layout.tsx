import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import { TopNav } from "@/components/top-nav";
import { SearchProvider } from "@/context/search-context";
import { Button } from "@saas/ui/button";
import { cn } from "@saas/ui/cn";
import { SidebarProvider } from "@saas/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    // This is where your authenticated app lives, add a sidebar, header etc.
    return (
        <SearchProvider>
            <SidebarProvider>
                <AppSidebar />
                <div
                    id="content"
                    className={cn(
                        "max-w-full w-full ml-auto",
                        "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
                        "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
                        "transition-[width] ease-linear duration-200",
                        "h-svh flex flex-col",
                        "group-data-[scroll-locked=1]/body:h-full",
                        "group-data-[scroll-locked=1]/body:has-[main.fixed-main]:h-svh"
                    )}
                >
                    <Header>
                        <TopNav links={topNavLinks} />
                        <div className="ml-auto flex items-center space-x-4">
                            <Search />
                            {/* TODO: Theme Switcher */}
                            <ProfileDropdown />
                        </div>
                    </Header>
                    {children}
                </div>
            </SidebarProvider>
        </SearchProvider>
    )
}

const topNavLinks = [
    {
        title: 'Visão Geral',
        href: 'dashboard/overview',
        isActive: true,
        disabled: false,
    },
    {
        title: 'Clientes',
        href: 'dashboard/customers',
        isActive: false,
        disabled: true,
    },
    {
        title: 'Produtos',
        href: 'dashboard/products',
        isActive: false,
        disabled: true,
    },
    {
        title: 'Configurações',
        href: 'dashboard/settings',
        isActive: false,
        disabled: true,
    },
]