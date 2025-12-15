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
        <div className="relative inline-block">
            {/* Menu Icon */}
            <div>
                <Image
                    src={open ? "/close.png" : "/open.png"}
                    alt="Menu Icon"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>

            {/* Dropdown Menu */}
            {open && (
                //<div className="absolute left-0 mt-2 w-40 bg-red-500 text-white absolute left-0 top-24 h-[calc (100vh-6rem)]">
                <div className="absolute left-0 top-24 mt-2 w-40 bg-red-500 text-white h-[calc(100vh-6rem)]">

                    {links.map((item) => (
                        <Link
                            key={item.id}
                            href={item.url}
                            className="block px-4 py-2 hover:bg-red-600"
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
