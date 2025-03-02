import React from "react";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Head from "next/head";
import "../scss/style.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Список данных о доставках",
    description: "Список данных о доставках",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <Head>
                <link
                    rel="icon"
                    href="/static/favicon.ico"
                    type="image/favicon.ico"
                />
            </Head>
            <body>
                <div className="wrapper">
                    <Header />
                    <main className="main">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
