"use client"

import { PasswordInput } from "@/components/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@saas/supabase/client";
import { Button } from "@saas/ui/button";
import { cn } from "@saas/ui/cn";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@saas/ui/form";
import { Input } from "@saas/ui/input";
import { type HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type SignUpFormProps = HTMLAttributes<HTMLDivElement>

const formSchema = z
    .object({
        email: z
            .string()
            .min(1, { message: "Preencha com seu e-mail" })
            .email({ message: "E-mail inválido" }),
        password: z
            .string()
            .min(1, {
                message: "Preencha com sua senha"
            })
            .min(8, {
                message: "Sua senha deve ter pelo menos 8 caracteres"
            }),
        confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "A senha e a confirmação não conferem",
        path: ["confirmPassword"]
    })

export function SignUpForm({ className, ...props }: SignUpFormProps) {
    const [isLoading, setIsLoading] = useState(false)
    const supabase = createClient()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        setIsLoading(true)
        const { email, password } = data

        const { error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            console.error("Erro ao criar conta", error.message)
        } else {
            console.log("Conta criada com sucesso")
        }

        setIsLoading(false)
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
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel>Senha</FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem className="space-y-1">
                                    <FormLabel>Confirmação da senha</FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="mt-2" disabled={isLoading}>
                            Criar conta
                        </Button>

                        {/* TODO: OAuth sign up */}
                    </div>
                </form>
            </Form>
        </div>
    )
}