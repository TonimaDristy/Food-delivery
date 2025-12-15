"use client";

import React from 'react';
import Menu from './Menu';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: 'maroon', // red background
                color: 'white',             // white text
            }}
        >
            {/* LOGO */}
            <Link
                href="/"
                style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: 'white',           // white text for logo
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    lineHeight: 1,
                }}
            >
                EatUp
            </Link>

            {/* MOBILE MENU */}
            <Menu />
        </div>
    );
};

export default Navbar;
