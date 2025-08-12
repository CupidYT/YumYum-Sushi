import React from "react";
import Link from "next/link";

interface MenuItemProps {
    href: string;
    label: string;
}

export default function MenuItem({ href, label }: MenuItemProps) {
    return (
        <li>
            <Link href={href} className="">
                {label}
            </Link>
        </li>
    );
}