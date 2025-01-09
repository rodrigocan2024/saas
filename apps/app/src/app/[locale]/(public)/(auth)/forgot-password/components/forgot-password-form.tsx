"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@saas/ui/button";
import { cn } from "@saas/ui/cn";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@saas/ui/form";
import { Input } from "@saas/ui/input";
import { type HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type ForgotPasswordFormProps = HTMLAttributes<HTMLDivElement>

const formSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Preencha com seu e-mail" })
        .email({ message: "E-mail inválido" }),
})

export function ForgotPasswordForm({ className, ...props }: ForgotPasswordFormProps) {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
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
        <div className={cn("grid gap-6")} {...props}>
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
                        <Button className="mt-2" disabled={isLoading}>
                            Enviar e-mail de redefinição
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}