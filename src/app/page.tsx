import { Logo } from "@/components/Global/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24 bg-Gourmete">
      {/* Brain */}

      <Logo size={80} />
      <h2 className="font-light text-4xl">
        Stud<span className="font-bold text-Iris">IA</span>
      </h2>
      <Link
        href={"/chat"}
        className="bg-Mint-white px-5 py-1 text-black font-bold rounded-lg"
      >
        Vamos começar
      </Link>
    </main>
  );
}
