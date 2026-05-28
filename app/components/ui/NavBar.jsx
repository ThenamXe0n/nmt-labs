"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/logo.png";
import headerlogo from "@/public/headerlogo.png";
import { pageRoutes } from "@/routes/pageRoutes";

const NavBar = () => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Colors Palette
  const colors = {
    bg: "black",
    card: "rgba(15, 23, 42, 0.95)",
    accent: "#ed6117",
    textMain: "#f8fafc",
    textMuted: "#323232",
    hover: "rgba(99, 102, 241, 0.1)",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "80px",
        background: colors.bg,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Logo Section */}
      <div
        onClick={() => router.push("/")}
        style={{
          height: "60%",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {/* First Logo - Imported Image */}
        <Image
          src={logo}
          alt="Main Logo"
          width={100}
          height={100}
          priority
          style={{
            filter: "invert(1.8) hue-rotate(180deg)",
            transform: "translate(-10px, -6px)",
            scale: "0.7",
            // objectFit: "contain",
          }}
        />

        {/* Second Logo - Public Folder Image */}
        <Image
          src={headerlogo}
          alt="Header Logo"
          width={180}
          height={20}
          priority
          style={{
            filter: "invert(1.8) hue-rotate(180deg)",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Navigation */}
      <nav ref={navRef} style={{ display: "flex", gap: "12px" }}>
        {Object.entries(pageRoutes).map(([key, value]) => {
          const isDropdown = Array.isArray(value);
          const isOpen = openDropdown === key;

          return (
            <div key={key} style={{ position: "relative" }}>
              <button
                onClick={() => {
                  if (!isDropdown) {
                    setOpenDropdown(null);
                    router.push(value.path);
                  } else {
                    setOpenDropdown(isOpen ? null : key);
                  }
                }}
                style={{
                  background: isOpen ? colors.hover : "transparent",
                  color: isOpen ? colors.accent : colors.textMain,
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {value.label || key}
                {isDropdown && (
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                    }}
                  >
                    <path d="M1 1L5 5L9 1" />
                  </svg>
                )}
              </button>

              {/* Mega Menu Dropdown */}
              {isDropdown && isOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 15px)",
                    right: "-100px",
                    background: colors.card,
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    padding: "24px",
                    width: "550px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "8px",
                    animation: "fadeInUp 0.2s ease-out",
                  }}
                >
                  <style>{`
                    @keyframes fadeInUp {
                      from { opacity: 0; transform: translateY(10px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                  `}</style>

                  {value.map((route) => (
                    <Link
                      key={route.path}
                      href={`/${key}/${route.path}`}
                      onClick={() => setOpenDropdown(null)}
                      style={{
                        textDecoration: "none",
                        color: colors.textMuted,
                        padding: "12px",
                        borderRadius: "10px",
                        fontSize: "13px",
                        fontWeight: "500",
                        transition: "all 0.2s ease",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = colors.hover;
                        e.currentTarget.style.color = colors.accent;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = colors.textMuted;
                      }}
                    >
                      {route?.Icon && (
                        <div style={{ margin: "5px 0px" }}>
                          {<route.Icon size={32} color="cyan" />}
                        </div>
                      )}
                      <span
                        style={{ color: colors.textMain, marginBottom: "2px" }}
                      >
                        {route.label}
                      </span>
                      <span style={{ fontSize: "11px", color: "white" }}>
                        Explore details
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* CTA Button */}
      <button
        style={{
          background: colors.accent,
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
        }}
        onClick={() => router.push("/get-started")}
      >
        Get Started
      </button>
    </header>
  );
};

export default NavBar;