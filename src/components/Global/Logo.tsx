import Image from "next/image";
import Brain_SVG from "@/assets/Brain.svg";
export const Logo = ({ size }: { size: number }) => {
  return (
    <div className="bg-Mint-white shadow-sm shadow-white rounded-lg p-1">
      <Image width={size} src={Brain_SVG} alt="Cerebro" />
    </div>
  );
};
