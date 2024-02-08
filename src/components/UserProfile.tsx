/* eslint-disable @next/next/no-img-element */
import { Session } from 'next-auth'

export default function UserProfile({ session }: { session: Session | null }) {
    if (!session?.user) {
        return <h1>Not logged in</h1>
    }

    return (
        <div className='flex space-x-2 items-center'>
            {session.user.image && <img src={session.user.image} alt='user image' height={50} width={50} />}
            <div>
                <div>{session.user.name}</div>
                <div>{session.user.email}</div>
            </div>
        </div>
    )
}
