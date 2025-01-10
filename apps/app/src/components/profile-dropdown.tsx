import { Avatar, AvatarFallback, AvatarImage } from "@saas/ui/avatar";
import { Button } from "@saas/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@saas/ui/dropdown-menu";
import Link from "next/link";

export function ProfileDropdown() {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        {/* TODO */}
                        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                        {/* TODO */}
                        <AvatarFallback>SN</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        {/* TODO */}
                        <p className='text-sm font-medium leading-none'>satnaing</p>
                        {/* TODO */}
                        <p className='text-xs leading-none text-muted-foreground'>
                            satnaingdev@gmail.com
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href="/settings">
                            Perfil
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href='/billing'>
                            Pagamento
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href='/settings'>
                            Configurações
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Nova equipe</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Sair
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}