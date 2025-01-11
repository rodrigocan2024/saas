import { AppSidebar } from "@/components/app-sidebar";
import { SearchProvider } from "@/context/search-context";
import { SidebarProvider } from "@saas/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    // This is where your authenticated app lives, add a sidebar, header etc.
    return (
        <SearchProvider>
            <SidebarProvider>
                <AppSidebar />
            </SidebarProvider>
            {children}
        </SearchProvider>
    )
}
