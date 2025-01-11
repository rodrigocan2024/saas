import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import { TopNav } from "@/components/top-nav";
import { Button } from "@saas/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@saas/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@saas/ui/tabs";

export const metadata = {
    title: "Home",
};

export default function Page() {
    return (
        <>
            {/* Top Heading */}
            <Header>
                <TopNav links={topNavLinks} />
                <div className="ml-auto flex items-center space-x-4">
                    <Search />
                    <ProfileDropdown />
                </div>
            </Header>
        </>
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