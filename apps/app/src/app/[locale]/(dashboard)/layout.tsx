import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import { TopNav } from "@/components/top-nav";
import { SearchProvider } from "@/context/search-context";
import { SidebarProvider } from "@saas/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    // This is where your authenticated app lives, add a sidebar, header etc.
    return (
        <SearchProvider>
            <SidebarProvider>
                <AppSidebar />
                <Header>
                    <TopNav links={topNavLinks} />
                    <div className="ml-auto flex items-center space-x-4">
                        <Search />
                        {/* TODO: Theme Switcher */}
                        <ProfileDropdown />
                    </div>
                </Header>
            </SidebarProvider>
            {children}
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