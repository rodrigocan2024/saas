"use client";

import { PasswordInput } from "@/components/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@saas/supabase/client";
import { Button } from "@saas/ui/button";
import { cn } from "@saas/ui/cn";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@saas/ui/form";
import { Icons } from "@saas/ui/icons";
import { Input } from "@saas/ui/input";
import Link from "next/link";
import { type HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Por favor, preencha com seu e-mail" })
        .email({ message: "E-mail inválido" }),
    password: z
        .string()
        .min(1, {
            message: "Por favor, preencha com sua senha"
        })
        .min(8, {
            message: "A senha deve ter pelo menos 8 caracteres"
        })
})

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = useState(false)
    const supabase = createClient()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    async function handleSignIn(data: z.infer<typeof formSchema>) {
        setIsLoading(true)
        const { email, password } = data

        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error?.message === "Invalid login credentials") {
            console.error("E-mail e/ou senha incorreto(s)")
        } else {
            console.log("Login bem sucedido")
        }

        setIsLoading(false)
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSignIn)}>
                    <div className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel>E-mail</FormLabel>
                                    <FormControl>
                                        <Input placeholder="nome@exemplo.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <div className="flex items-center justify-between">
                                        <FormLabel>Senha</FormLabel>
                                        <Link
                                            href="/forgot-password"
                                            className="text-sm font-medium text-muted-foreground hover:opacity-75"
                                        >
                                            Esqueceu sua senha?
                                        </Link>
                                    </div>
                                    <FormControl>
                                        <PasswordInput placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="mt-2" disabled={isLoading}>
                            {isLoading ? (
                                <Icons.Loader className="h-4 w-4 animate-spin" />
                            ) : (
                                <>Entrar</>
                            )}
                        </Button>

                        {/* TODO: OAuth login */}
                    </div>
                </form>
            </Form>
        </div>
    )
}