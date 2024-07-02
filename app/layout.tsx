import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tutorial",
  description: "The connected workspace where better, faster work happens.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={font.className}>
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
