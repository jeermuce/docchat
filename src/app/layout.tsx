import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "DocChat",
    description: "AI chat about PDF documents",
};

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children ? (
                    children
                ) : (
                    <a
                        href="https://github.com/jeermuce/docchat/issues"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button
                            variant={"destructive"}
                            className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
                        >
                            DocChat is dead, please click here to rise an issue
                        </Button>
                    </a>
                )}
            </body>
        </html>
    );
}
