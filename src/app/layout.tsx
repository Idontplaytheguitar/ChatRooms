import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "fndtn/components/ThemeProvider";
import FullNav from "fndtn/components/FullNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Chatrooms",
    description: "Chatrooms app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="relative flex min-h-screen flex-col items-center p-5 bg-light-background dark:bg-dark-background scroll-smooth">
                        <FullNav />
                    {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
