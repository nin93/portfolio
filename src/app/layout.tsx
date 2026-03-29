import { ViewTransition, type ReactNode } from "react";

import Footer from "@/components/layout/footer";

import { FONT_MONO, FONT_SANS, FONT_SERIF } from "@/fonts";

import WithCanvas from "@/components/layout/with-canvas";
import DitheringCanvas from "@/components/models/dithering-canvas";
import Header from "@/components/layout/header";

import { ROOT_METADATA } from "@/constants/root-metadata";

import "./globals.css";

export const metadata = ROOT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FONT_SERIF.variable} ${FONT_SANS.variable} ${FONT_MONO.variable} bg-background text-foreground font-mono transition-colors`}
      >
        <WithCanvas
          canvas={
            <>
              <DitheringCanvas
                className="h-full"
                colorBack="#0c0909"
                colorFront="#700c0c"
              />
            </>
          }
        >
          <div className="flex min-h-screen flex-col justify-between">
            <div className="mb-18">
              <Header />

              <ViewTransition>
                <main>{children}</main>
              </ViewTransition>
            </div>

            <Footer />
          </div>
        </WithCanvas>
      </body>
    </html>
  );
}
