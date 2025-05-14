"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/HomePage.module.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get pathname safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.split("/")[1];
      setActiveLink(path || "");
    }
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { path: "who-we-are", label: "Who We Are" },
    { path: "what-we-do", label: "What We Do" },
    // { path: "Resources", label: "Resources" },
    { path: "Get-in-touch", label: "Get In Touch" },
  ];

  return (
    <>
      <div className={styles.logoContainer}>
        <Link href="/" passHref>
          <div className={styles.asset18288x81Wrapper}>
            <Image
              src="/logo.png"
              width={48}
              height={44}
              alt="Company Logo"
              priority
            />
          </div>
        </Link>
      </div>

      <div className={styles.frameParent16}>
        <div
          className={`${styles.menuIcon} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
          onClick={toggleMobileMenu}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <div
          className={`${styles.frameParent17} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          {navItems.map((item) => (
            <Link key={item.path} href={`/${item.path}`} passHref>
              <div
                className={`${styles.getStarted} ${
                  activeLink === item.path ? styles.active : ""
                }`}
                onClick={() => handleLinkClick(item.path)}
              >
                <span className={styles.linkText}>{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
