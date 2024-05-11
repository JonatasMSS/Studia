import { Logo } from "@/components/Global/Logo";
import { UserLogo } from "../Global/UserLogo";
import Markdown from "react-markdown";

type chatSenderProps = {
  msg: string;
  role: string;
};

export const ChatSender = ({ msg, role }: chatSenderProps) => {
  if (role === "user") {
    return (
      <div className="flex flex-row-reverse animate-opacity-1/2  items-center gap-5">
        <UserLogo size={20} />
        <h2 className="font-light">{msg}</h2>
      </div>
    );
  }

  return (
    <div className="flex animate-opacity-1/2 items-center gap-10">
      <Logo size={20} />
      <h2 className="font-light w-[80%] text-justify">
        <Markdown>{msg}</Markdown>
      </h2>
    </div>
  );
};
