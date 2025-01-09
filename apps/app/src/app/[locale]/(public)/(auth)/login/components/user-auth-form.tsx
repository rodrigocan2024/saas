"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@saas/ui/button";
import { cn } from "@saas/ui/cn";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@saas/ui/form";
import { Input } from "@saas/ui/input";
import Link from "next/link";
import { type HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordInput } from "./password-input";

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Por favor, entre com seu e-mail" })
        .email({ message: "E-mail inválido" }),
    password: z
        .string()
        .min(1, {
            message: "Por favor, entre com sua senha"
        })
        .min(8, {
            message: "A senha deve ter pelo menos 8 caracteres"
        })
})

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        // TODO
        setIsLoading(true)
        console.log(data)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
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
                            Entrar
                        </Button>

                        {/* TODO: OAuth login */}
                    </div>
                </form>
            </Form>
        </div>
    )
}