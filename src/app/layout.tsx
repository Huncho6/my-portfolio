"use client";
import './globals.css';
import { Oswald } from 'next/font/google';  // Using Oswald from next/font/google
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Footer from '@/components/Footer';
import ToggleButton from '@/components/ToggleButton';
import Sidebar from '@/components/Sidebar';
import Head from 'next/head';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],  // Adjust weights here as needed
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log('RootLayout rendering');  // Add this log for debugging
  return (
    <html lang="en" className={oswald.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="flex flex-col h-screen">
        <Provider store={store}>
          <div className="flex flex-1">
            <div className='h-screen fixed z-[201]'>
              <Sidebar />
            </div>
            <main className="flex-1 lg:ml-64 overflow-auto p-4">
              {children}
              <Footer />
              <ToggleButton /> {/* Ensure ToggleButton is rendered last */}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
