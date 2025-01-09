import { Card } from "@saas/ui/card";
import Link from "next/link";
import { SignUpForm } from "./components/sign-up-form";

export const metadata = {
    title: "Criar conta",
};

export default function Page() {
    return (
        <Card className="p-6">
            <div className="mb-2 flex flex-col space-y-2 text-left">
                <h1 className="text-lg font-semibold tracking-tight">
                    Criar uma conta
                </h1>
                <p className="text-sm text-muted-foreground">
                    Preencha com e-mail e senha para criar uma conta. <br />
                    Já tem uma conta?{" "}
                    <Link
                        href="/login"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Login
                    </Link>
                </p>
            </div>
            <SignUpForm />
            <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
                Criando uma conta, você concorda com nossos{" "}
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