"use client";
import "./globals.css";
import React from 'react';
import { usePathname } from 'next/navigation';
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const showFooter = pathname !== '/';

  return (

    <html lang="en">
      <body>
        <Header />
        {children}
        {showFooter && <Footer />}
      </body>
    </html>
  );
};

export default Layout;
