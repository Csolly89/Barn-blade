"use client"

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    {
        title: "About",
        path: "/About",
    },
    {
        title: "Specials",
        path: "/Specials",
    },
    {
        title: "Products",
        path: "/Products",
    },
    {
        title: "Contact",
        path: "/Contact",
    },
];
function HeroNav() {
    
    const currentUrl = usePathname()
    return (
        <>
            {currentUrl === "/" ? (
                <div className='w-screen h-14 items-center flex justify-between bg-background-50 text-text-950'>
                    <Link href={'/'} className='font-Title text-3xl px-4 flex-2'>Barn & Blade Butchers</Link>
                    <div className='flex flex-row justify-center gap-5 flex-1 mr-[10rem]'>
                        {navLinks.map(links => (
                            <Link key={links.title} href={links.path} className='font-Body'> {links.title}</Link>
                        ))}
                    </div>
                    <Link href={'/Login'} className='font-Body mr-10'>Login</Link>
                </div>
            ) : (
                <div className='hidden w-screen h-14 items-center md:flex flex-row justify-center text-center bg-background-50'>
                    <Link href={'/'} className='font-Title text-5xl text-text-950'>Barn & Blade Butchers</Link>
                </div>
            )}
        </>
    );
}

export default HeroNav;