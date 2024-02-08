import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import AuthButton from "@/components/AuthButton";
import UserProfile from "@/components/UserProfile";

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <UserProfile session={session}/>
      <br />
      <AuthButton session={session}/>
    </main>
  );
}
