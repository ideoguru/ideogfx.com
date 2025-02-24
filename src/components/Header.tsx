"use client"; // Ensuring this is a client-side component

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/HomePage.module.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState(""); // Initialize activeLink state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle

  // This effect ensures the active link is set when the page loads
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("who-we-are")) {
      setActiveLink("who-we-are");
    } else if (path.includes("what-we-do")) {
      setActiveLink("what-we-do");
    } else if (path.includes("insights")) {
      setActiveLink("insights");
    } else if (path.includes("get-in-touch")) {
      setActiveLink("get-in-touch");
    }
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Update active link when clicked
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <div className={styles.frameParent16}>
      <div className={styles.asset18288x81Wrapper}>
        <Image
          className={styles.asset18288x81}
          width={48}
          height={44}
          alt="Logo"
          src="/logo.png"
        />
      </div>

      {/* Hamburger Menu Icon (Mobile Only) */}
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

      {/* Navigation Links */}
      <div
        className={`${styles.frameParent17} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.whoWeAreWrapper}>
          <Link href="/who-we-are">
            <div
              className={`${styles.getStarted} ${
                activeLink === "who-we-are" ? styles.active : ""
              }`}
              onClick={() => handleLinkClick("who-we-are")}
            >
              Who We Are
            </div>
          </Link>
        </div>
        <div className={styles.whatWeDoContainer}>
          <Link href="/what-we-do">
            <div
              className={`${styles.getStarted} ${
                activeLink === "what-we-do" ? styles.active : ""
              }`}
              onClick={() => handleLinkClick("what-we-do")}
            >
              What We Do
            </div>
          </Link>
        </div>
        <div className={styles.insightsWrapper}>
          <Link href="/Resources">
            <div
              className={`${styles.getStarted} ${
                activeLink === "Resources" ? styles.active : ""
              }`}
              onClick={() => handleLinkClick("Resources")}
            >
              Resources
            </div>
          </Link>
        </div>
        <div className={styles.getInTouchWrapper}>
          <Link href="/Get-in-touch">
            <div
              className={`${styles.getStarted} ${
                activeLink === "Get-in-touch" ? styles.active : ""
              }`}
              onClick={() => handleLinkClick("Get-in-touch")}
            >
              Get In Touch
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
