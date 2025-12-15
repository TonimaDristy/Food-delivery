"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { title } from 'process';
import Link from 'next/link';

const links = [

    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },

];

const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            {!open ? (
                <Image src="/open.png" alt="Menu" width={20} height={20} onClick={() => setOpen(true)} />
            ) : (
                <Image src="/close.png" alt="Menu" width={20} height={20} onClick={() => setOpen(false)} />
            )}
            <div className="bg-red-500 text-white absolute left-0 top-24">
                {links.map((item) => (
                    <Link key={item.id} href={item.url}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Menu