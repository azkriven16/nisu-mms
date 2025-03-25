import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./schema/sign-in-schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                // const { email, password } = await signInSchema.parseAsync(
                //     credentials
                // );
                let user = {
                    email: "test@email.com",
                    password: "12345",
                };

                return user;
            },
        }),
    ],
});
