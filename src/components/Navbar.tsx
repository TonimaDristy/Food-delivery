"use client";

import React from 'react';
import Menu from './Menu';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    backgroundColor: 'white', // white background
                    color: 'black',           // default text color
                }}
            >
                {/* LOGO */}
                <Link
                    href="/"
                    style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        color: 'maroon',          // EatUp in red
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

            {/* Full-width red line under Navbar */}
            <div
                style={{
                    width: '100%',
                    height: '4px',        // thickness of the line
                    backgroundColor: 'maroon',
                }}
            />
        </>
    );
};

export default Navbar;
