import { Card } from "@saas/ui/card";
import Link from "next/link";
import { UserAuthForm } from "./components/user-auth-form";

export const metadata = {
    title: "Login",
};

export default function Page() {
    return (
        <Card className="p-6">
            <div className="flex flex-col space-y-2 text-left">
                <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
                <p className="text-sm text-muted-foreground">
                    Preencha abaixo com seu e-mail e senha <br />
                    para entrar na sua conta
                </p>
            </div>
            <UserAuthForm />
            <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
                Clicando em entrar, você concorda com nossos{" "}
                <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    {/* TODO */}
                    Termos de Serviço
                </Link>{" "}
                e{" "}
                <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    {/* TODO */}
                    Política de Privacidade
                </Link>
                .
            </p>
        </Card>
    )
}
