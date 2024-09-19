"use client";
import "./globals.css";
import { Oswald } from 'next/font/google';
// import Sidebar from "@/components/Sidebar";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Footer from "@/components/Footer";
import ToggleButton from "@/components/ToggleButton";

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={oswald.className}>
      <body className="flex h-screen">
        <Provider store={store}>
          {/* Sidebar */}
          <div className="w-72">
            {/* <Sidebar /> */}
          </div>

          {/* Main content area */}
          <div className="flex-1 overflow-auto p-4">
            {children}
            <Footer />
            <ToggleButton />
          </div>
        </Provider>
      </body>
    </html>
  );
}
