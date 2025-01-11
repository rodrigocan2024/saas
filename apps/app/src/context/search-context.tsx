"use client"

import { CommandMenu } from "@/components/command-menu";
import React from "react";

interface SearchContextType {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchContext = React.createContext<SearchContextType | null>(null)

interface SearchProviderProps {
    children: React.ReactNode
}

export function SearchProvider({ children }: SearchProviderProps) {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <SearchContext.Provider value={{ open, setOpen }}>
            {children}
            <CommandMenu />
        </SearchContext.Provider>
    )
}

export const useSearch = () => {
    const searchContext = React.useContext(SearchContext)

    if (!searchContext) {
        throw new Error("useSearch tem que ser usado com <SearchContext.Provider>")
    }

    return searchContext
}