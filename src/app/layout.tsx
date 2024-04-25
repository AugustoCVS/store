import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReactQueryProvider } from "@/src/providers/ReactQueryProvider";
import StyledComponentsRegistry from "@/src/styles/registry";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/src/styles/globals.css";
import { ThemeApplicationProvider } from "../providers/ThemeProvider";
import { ReduxProvider } from "../providers/ReduxProvider";

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
        <ReduxProvider>
          <ThemeApplicationProvider>
            <ReactQueryProvider>
              <StyledComponentsRegistry>
                {children}
                <ToastContainer />
              </StyledComponentsRegistry>
            </ReactQueryProvider>
          </ThemeApplicationProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
