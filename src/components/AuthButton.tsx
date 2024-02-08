'use client'
import { Session } from "next-auth"
import { signIn, signOut } from "next-auth/react"

export default function AuthButton({ session }: { session: Session | null }) {
    async function logIn() {
        signIn("discord")
    }

    async function logOut() {
        signOut()
    }

    return <button onClick={session ? logOut : logIn}>Log {session ? 'Out' : 'In'}</button>
}