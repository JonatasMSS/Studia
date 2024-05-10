import { ChoiceButton } from "@/components/chat/ChoiceButton";
import { Logo } from "@/components/Global/Logo";

export default function IntroChatPage() {
  return (
    <div className="flex flex-col gap-10 w-full justify-start items-center">
      {/* Logo Section */}
      <section className="w-3/4 sm:w-1/2 flex">
        <Logo size={40} />
      </section>

      {/* Title */}

      <h1 className="text-3xl sm:text-5xl text-left w-3/4 sm:w-1/2">
        Olá estudante! <br /> Sou a stud
        <span className="font-bold text-Iris">IA</span>{" "}
      </h1>

      {/* Sub title */}

      <section className="w-3/4 sm:w-1/2 font-light flex flex-col">
        <h2>Seu assistente em estudos!</h2>
        <h2>Em que gostaria de ser ajudado?</h2>
      </section>

      {/* Buttons */}

      <div className="w-1/2 flex gap-3 flex-wrap">
        <ChoiceButton LinkTo="chat/ing" textIn="Ajuda em inglês" />
        <ChoiceButton LinkTo="chat/fis" textIn="Ajuda em Física" />
        <ChoiceButton LinkTo="chat/bio" textIn="Ajuda em Biologia" />
        <ChoiceButton LinkTo="chat/quim" textIn="Ajuda em Química" />
        <ChoiceButton
          LinkTo="chat/hml"
          textIn="Ajuda em Humanas e Linguagens"
        />
      </div>
    </div>
  );
}
