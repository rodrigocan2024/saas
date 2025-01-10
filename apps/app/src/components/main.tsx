import { cn } from "@saas/ui/cn";
import type React from "react";

interface MainProps extends React.HTMLAttributes<HTMLElement> {
    fixed?: boolean
    ref?: React.Ref<HTMLElement>
}

export const Main = ({ fixed, ...props }: MainProps) => {
    return (
        <main
            className={cn(
                'peer-[.header-fixed]/header:mt-16',
                'px-4 py-6',
                fixed && 'fixed-main flex flex-col flex-grow overflow-hidden'
            )}
            {...props}
        />
    )
}