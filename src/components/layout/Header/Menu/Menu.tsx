import React from "react";
import MenuItem from "./MenuItem";

export default function Menu() {
    const menuItems = [
        { href: "/promotii", label: "Promoții" },
        { href: "/despre-noi", label: "Despre noi" },
        { href: "/contacte", label: "Contacte" },
        { href: "/locatii", label: "Locații" },
        { href: "/livrare-si-achitare", label: "Livrare și achitare" },
    ];

    return (
        <ul className="flex gap-6">
            {menuItems.map(({ href, label }) => (
                <MenuItem key={href} href={href} label={label} />
            ))}
        </ul>
    );
}