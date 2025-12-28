"use client";

import React from "react";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
    return (
        <>
            <nav
                style={{
                    backgroundColor: "#fff",
                    padding: "1rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "800",
                        color: "maroon",
                        textDecoration: "none",
                    }}
                >
                    EatUp
                </Link>

                {/* Mobile Menu */}
                <Menu />
            </nav>

            {/* Bottom Line */}
            <div
                style={{
                    width: "100%",
                    height: "4px",
                    backgroundColor: "maroon",
                }}
            />
        </>
    );
};

export default Navbar;
