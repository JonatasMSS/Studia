import Image from "next/image";
import UserSVG from "@/assets/User.svg";

export const UserLogo = ({ size }: { size: number }) => {
  return (
    <div className="bg-Mint-white shadow-sm shadow-white rounded-lg p-1">
      <Image width={size} src={UserSVG} alt="Cerebro" />
    </div>
  );
};
