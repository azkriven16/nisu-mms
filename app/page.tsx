import { auth } from "@/auth";
import { SignOutButton } from "@/components/auth/signout-button";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await auth();

    if (!session) return redirect("/sign-in");

    return (
        <div>
            <SignOutButton />
        </div>
    );
}
