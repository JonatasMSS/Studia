import Link from "next/link";

type ChoiceButtonProps = {
  textIn: string;
  LinkTo: string;
};

export const ChoiceButton = ({ textIn, LinkTo }: ChoiceButtonProps) => {
  return (
    <Link
      href={LinkTo}
      className="hover:scale-105 transition-all hover:bg-Iris/55 hover:border-solid hover:border-[1px] hover:border-Iris/85 rounded-full flex font-medium text-base px-5 py-2 bg-Iris text-Mint-white"
    >
      {textIn}
    </Link>
  );
};
