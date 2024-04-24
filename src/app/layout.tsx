import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReactQueryProvider } from "@/src/utils/ReactQueryProvider";
import StyledComponentsRegistry from "@/src/styles/registry";

import "@/src/styles/globals.css";

const montserrat = Montserrat({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Store",
  description: "Generate by Augusto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ReactQueryProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
