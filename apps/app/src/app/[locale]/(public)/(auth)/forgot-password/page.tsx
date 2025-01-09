import { Card } from "@saas/ui/card";
import Link from "next/link";
import { ForgotPasswordForm } from "./components/forgot-password-form";

export default function Page() {
    return (
        <Card className="p-6">
            <div className="mb-2 flex flex-col space-y-2 text-left">
                <h1 className="text-md font-semibold tracking-tight">
                    Redefinição de senha
                </h1>
                <p className="text-sm text-muted-foreground">
                    Preencha com o e-mail cadastrado e <br /> enviaremos um link para redefinir a senha.
                </p>
            </div>
            <ForgotPasswordForm />
            <p className="mt-4 px-8 text-center text-sm text-muted-foreground">
                Não tem uma conta?{" "}
                <Link
                    href="/sign-up"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Criar conta
                </Link>
                .
            </p>
        </Card>
    )
}