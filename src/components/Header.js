import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">
        <Link href="/">Kittokatsu</Link>
      </h1>
      <nav>
        <Link href="/vocabulary" className="mr-4">
          Vocabulary
        </Link>
        <Link href="/quiz" className="mr-4">
          Quiz
        </Link>
        <Link href="/leaderboard">Leaderboard</Link>
      </nav>
      {session ? (
        <button
          onClick={() => signOut()}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => signIn("facebook")}
          className="bg-green-500 px-3 py-1 rounded"
        >
          Login with Facebook
        </button>
      )}
    </header>
  );
}
