import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "@/config";
import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
    providers: [
        DiscordProvider({
            clientId: DISCORD_CLIENT_ID,
            clientSecret: DISCORD_CLIENT_SECRET
        })
    ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }