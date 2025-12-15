"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
];

const Menu: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Menu Icon */}
            <div>
                <Image
                    src={open ? "/close.png" : "/open.png"}
                    alt="Menu Icon"
                    width={30}
                    height={30}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setOpen(!open)}
                />
            </div>

            {/* Dropdown Menu */}
            {open && (
                <div
                    style={{
                        position: 'fixed',          // fixed relative to viewport
                        top: '4rem',                // distance from top
                        left: '50%',                // center horizontally
                        transform: 'translateX(-50%)',
                        width: '15rem',             // width of dropdown
                        backgroundColor: 'maroon',
                        color: 'white',
                        borderRadius: '0.25rem',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 50,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',       // center items inside
                        maxHeight: 'calc(100vh - 6rem)',
                        overflowY: 'auto',
                        padding: '0.5rem 0',
                    }}
                >
                    {links.map((item) => (
                        <Link
                            key={item.id}
                            href={item.url}
                            style={{
                                padding: '0.5rem 1rem',
                                textDecoration: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                width: '100%',
                                textAlign: 'center',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#8B0000';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'maroon';
                            }}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Menu;
