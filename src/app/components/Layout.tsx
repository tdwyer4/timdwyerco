"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
}

const Layout: React.FC<LayoutProps> = ({
  children,
  variant = "light",
}: LayoutProps) => {
  return (
    <div
      className={variant === "dark" ? styles.layoutDark : styles.layoutLight}
    >
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
