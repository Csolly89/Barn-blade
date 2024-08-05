import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="h-8 p-4 lg:p-10 flex items-center justify-between bg-primary-500">
            <Link href="/" className="font-bold font-Title text-3xl">Barn & Blade Butchers </Link>
            <p className="lg:text-[.65rem] font-light">©2024 ALL RIGHTS RESERVED</p>
        </div>
    );
}
export default Footer;