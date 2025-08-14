"use client";

import React from "react";
import Image from "next/image";

type MarqueeProps = {
    icon: string | React.ReactNode;
    mainHeading: string;
    marqueeItems: string[];
};

export default function Marquee({
    icon,
    mainHeading,
    marqueeItems,
}: MarqueeProps) {
    return (
        <div className="flex items-center bg-white overflow-hidden border-b border-gray-200">
            <div className="flex items-center gap-2 px-4 bg-white shrink-0">
                {typeof icon === "string" ? (
                <Image src={icon} alt="icon" width={32} height={32} />
                ) : (
                icon
                )}
                <h2 className="font-bold text-black">{mainHeading}</h2>
            </div>

            <div className="relative flex-1 overflow-hidden">
                <div className="absolute whitespace-nowrap animate-marquee">
                {Array(2)
                    .fill(null)
                    .map((_, idx) => (
                    <React.Fragment key={idx}>
                        {marqueeItems.map((item, i) => (
                        <span key={`${idx}-${i}`} className="mx-6 text-gray-500">
                            {item}
                        </span>
                        ))}
                    </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}