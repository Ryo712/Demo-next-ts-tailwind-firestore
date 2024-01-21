// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-10">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
