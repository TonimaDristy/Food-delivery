"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Orders", url: "/orders" },
    { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ position: "relative" }}>
            {/* Menu Icon */}
            <Image
                src={open ? "/close.png" : "/open.png"}
                alt="Menu Icon"
                width={30}
                height={30}
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(!open)}
            />

            {/* Dropdown */}
            {open && (
                <div
                    style={{
                        position: "fixed",
                        top: "4.5rem",
                        right: "1rem",
                        width: "220px",
                        backgroundColor: "maroon",
                        borderRadius: "8px",
                        overflow: "hidden",
                        zIndex: 100,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    }}
                >
                    {[...links, { id: 5, title: "Login", url: "/login" }].map(
                        (item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                onClick={() => setOpen(false)}
                                style={{
                                    display: "block",
                                    padding: "12px",
                                    textAlign: "center",
                                    color: "white",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#8B0000")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor = "maroon")
                                }
                            >
                                {item.title}
                            </Link>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default Menu;
