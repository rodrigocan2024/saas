import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { Overview } from "@/components/overview";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { RecentSales } from "@/components/recent-sales";
import { Search } from "@/components/search";
import { TopNav } from "@/components/top-nav";
import { Button } from "@saas/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@saas/ui/card";
import { cn } from "@saas/ui/cn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@saas/ui/tabs";

export const metadata = {
    title: "Home",
};

export default function Page() {
    return (
        <Main>
            <div className="mb-2 flex items-center justify-between space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">Início</h1>
                <div className="flex items-center space-x-2">
                    <Button>Download</Button>
                </div>
            </div>
            <Tabs
                orientation="vertical"
                defaultValue="overview"
                className="space-y-4"
            >
                <div className="w-full">
                    <TabsList>
                        <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                        <TabsTrigger value="analytics" disabled>Análises</TabsTrigger>
                        <TabsTrigger value="reports" disabled>Relatórios</TabsTrigger>
                        <TabsTrigger value="notifications" disabled>Notificações</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Receita total
                                </CardTitle>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    className='h-4 w-4 text-muted-foreground'
                                >
                                    <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">R$ 45.231,89</div>
                                <p className='text-xs text-muted-foreground'>
                                    +20,1% do que o mês passado
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Assinaturas
                                </CardTitle>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    className='h-4 w-4 text-muted-foreground'
                                >
                                    <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                                    <circle cx='9' cy='7' r='4' />
                                    <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+2350</div>
                                <p className="text-xs text-muted-foreground">
                                    +180,1% do que o mês passado
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Vendas</CardTitle>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    className='h-4 w-4 text-muted-foreground'
                                >
                                    <rect width='20' height='14' x='2' y='5' rx='2' />
                                    <path d='M2 10h20' />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+12.234</div>
                                <p className="text-xs text-muted-foreground">
                                    +19% do que o mês passado
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Usuários ativos agora
                                </CardTitle>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    className='h-4 w-4 text-muted-foreground'
                                >
                                    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">573</div>
                                <p className="text-xs text-muted-foreground">
                                    +201 do que a última hora
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
                        <Card className="col-span-1 lg:col-span-4">
                            <CardHeader>
                                <CardTitle>Visão Geral</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <Overview />
                            </CardContent>
                        </Card>
                        <Card className="col-span-1 lg:col-span-3">
                            <CardHeader>
                                <CardTitle>Vendas recentes</CardTitle>
                                <CardDescription>
                                    Você fez 265 vendas esse mês.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RecentSales />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </Main>
    )
}