"use client";
import "./globals.css";
import { Oswald } from 'next/font/google';
import { Provider } from "react-redux";
import { store } from "../app/store";
import Footer from "@/components/Footer";
import ToggleButton from "@/components/ToggleButton";
import Sidebar from "@/components/Sidebar";
import { Head } from "next/document";

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={oswald.className}>
       <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
      <body className="flex flex-col h-screen">
        <Provider store={store}>
          <div className="flex flex-1">
            {/* Sidebar */}
            <div className="w-72 lg:w-1/4 bg-gray-200 dark:bg-gray-800">
              <Sidebar />
            </div>

            {/* Main content area */}
            <main className="flex-1 overflow-auto p-4">
              {children}
              <Footer />
              <ToggleButton />
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
