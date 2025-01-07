"use client";

import { createClient } from "@saas/supabase/client";
import { Button } from "@saas/ui/button";
import { Icons } from "@saas/ui/icons";

export function SignOut() {
    const supabase = createClient();

    const handleSignOut = () => {
        supabase.auth.signOut();
    };

    return (
        <Button
            onClick={handleSignOut}
            variant="outline"
            className="font-mono gap-2 flex items-center"
        >
            <Icons.SignOut className="size-4" />
            <span>Sign out</span>
        </Button>
    );
}
