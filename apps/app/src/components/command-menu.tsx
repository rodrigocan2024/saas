"use client"

import { useSearch } from "@/context/search-context";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@saas/ui/command";
import { Icons } from "@saas/ui/icons";
import { ScrollArea } from "@saas/ui/scroll-area";
import { useRouter } from "next/navigation";
import React from "react";
import { sidebarData } from "./data/sidebar-data";

export function CommandMenu() {
    const router = useRouter()
    const { open, setOpen } = useSearch()
    // TODO Theme

    const runCommand = React.useCallback(
        (command: () => unknown) => {
            setOpen(false)
            command()
        },
        [setOpen]
    )

    return (
        <CommandDialog modal open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Digite um comando ou pesquise..." />
            <CommandList>
                <ScrollArea type="hover" className="h-72 pr-1">
                    <CommandEmpty>Não foram encontrados resultados.</CommandEmpty>
                    {sidebarData.navGroups.map((group) => (
                        <CommandGroup key={group.title} heading={group.title}>
                            {group.items.map((navItem, i) => {
                                if (navItem.url)
                                    return (
                                        <CommandItem
                                            key={`${navItem.url}-${i}`}
                                            value={navItem.title}
                                            onSelect={() => {
                                                runCommand(() => router.push(navItem.url.toString()))
                                            }}
                                        >
                                            <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                                <Icons.ArrowRight className="size-2 text-muted-foreground/80" />
                                            </div>
                                            {navItem.title}
                                        </CommandItem>
                                    )

                                return navItem.items?.map((subItem, i) => (
                                    <CommandItem
                                        key={`${navItem.url}-${i}`}
                                        value={subItem.title}
                                        onSelect={() => {
                                            runCommand(() => router.push(subItem.url.toString()))
                                        }}
                                    >
                                        <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                            <Icons.ArrowRight className="size-2 text-muted-foreground/80" />
                                        </div>
                                        {subItem.title}
                                    </CommandItem>
                                ))
                            })}
                        </CommandGroup>
                    ))}
                    {/* TODO: Theme switcher */}
                </ScrollArea>
            </CommandList>
        </CommandDialog>
    )
}