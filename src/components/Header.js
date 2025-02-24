import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Mobile icons
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <h1>
        <Link href="/">Kittokatsu</Link>
      </h1>

      {/* Desktop Navigation */}
      <nav>
        <Link href="/vocabulary">Vocabulary</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/leaderboard">Leaderboard</Link>
      </nav>

      {/* Mobile Menu */}
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/vocabulary">Vocabulary</Link>
          <Link href="/quiz">Quiz</Link>
          <Link href="/leaderboard">Leaderboard</Link>
        </div>
      )}

      {/* Login/Logout */}
      {session ? (
        <button onClick={() => signOut()}>Logout</button>
      ) : (
        <button onClick={() => signIn("facebook")}>Login with Facebook</button>
      )}
    </header>
  );
}
