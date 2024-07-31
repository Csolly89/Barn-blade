import Link from 'next/link';
import * as React from 'react';

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
    return (
        <div>
            {navLinks.map(links => (
                <Link key={links.title} href={links.path}> {links.title}</Link>
            ))}
        </div>
    );
}

export default HeroNav;