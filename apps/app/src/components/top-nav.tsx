import { Button } from "@saas/ui/button";
import { cn } from "@saas/ui/cn";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@saas/ui/dropdown-menu";
import { Icons } from "@saas/ui/icons";
import Link from "next/link";

interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
    links: {
        title: string
        href: string
        isActive: boolean
        disabled?: boolean
    }[]
}

export function TopNav({ className, links, ...props }: TopNavProps) {
    return (
        <>
            <div className="md:hidden">
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="outline">
                            <Icons.Menu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="bottom" align="start">
                        {links.map(({ title, href, isActive, disabled }) => (
                            <DropdownMenuItem key={`${title}-${href}`} asChild>
                                <Link
                                    href={href}
                                    className={!isActive ? "text-muted-foreground" : ""}
                                >
                                    {title}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <nav
                className={cn(
                    "hidden items-center space-x-4 md:flex lg:space-x-6",
                    className
                )}
                {...props}
            >
                {links.map(({ title, href, isActive, disabled }) => (
                    <Link
                        key={`${title}-${href}`}
                        href={href}
                        className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? '' : 'text-muted-foreground'}`}
                    >
                        {title}
                    </Link>
                ))}
            </nav>
        </>
    )
}