import { Logo } from "@/components/Global/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24 bg-Gourmete">
      {/* Brain */}

      <div className="animate-transition-box-1s ">
        <Logo size={80} />
      </div>
      <h2 className="font-light text-white text-4xl animate-transition-box-2s">
        Stud<span className="font-bold text-Iris">IA</span>
      </h2>
      <Link
        href={"/chat"}
        className="bg-Mint-white animate-transition-box-3s hover:scale-105 transition-all hover:bg-Mint-white/80  px-5 py-1 text-black font-bold rounded-lg"
      >
        Vamos começar
      </Link>
    </main>
  );
}
