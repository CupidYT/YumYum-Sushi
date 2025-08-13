import Link from "next/link";
import React from "react";

type LogoProps = {
    width?: number | string;
    height?: number | string;
};

export default function Logo({ width, height }: LogoProps) {
    return (
        <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
                <img
                    src="/logo.svg"
                    alt="YumYum Sushi"
                    {...(width ? { width } : {})}
                    {...(height ? { height } : {})}
                />
            </Link>
        </div>
    );
}