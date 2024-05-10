import { HeaderLayout } from "@/components/chat/HeaderLayout";
import { ReactNode } from "react";

export default function ChatLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col bg-Dark-gourmete justify-center items-center">
      {/* Header */}
      <HeaderLayout />
      {children}
    </main>
  );
}
