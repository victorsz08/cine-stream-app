"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #202020;
  }

  h1, h2 {
    color: #FFD100;
  }

  p, a {
    color: #D6D6D6;
    font-weight: 300;
  }
  
  button {
    background-color: #FFEE32;
    padding: .8rem 1.2rem;
    color: #333533;
    border: none;
    border-radius: .6rem;
    font-weight: 600;
  }
`


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <GlobalStyles/>
      <body className={inter.className}>
        <Header/>
            {children}
        </body>
    </html>
  );
}
