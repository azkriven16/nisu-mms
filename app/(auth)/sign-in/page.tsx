import { auth } from "@/auth";
import { SignInButton } from "@/components/auth/signin-button";
import { redirect } from "next/navigation";
import React from "react";

export default async function SignInPage() {
    const session = await auth();

    if (session) return redirect("/");

    return (
        <div>
            <SignInButton />
        </div>
    );
}
