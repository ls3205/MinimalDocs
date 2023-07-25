import "../styles/globals.css";
import "material-icons/iconfont/material-icons.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MinimalDocs",
    description:
        "A minimalistic text editor with basic functions and more to come",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
