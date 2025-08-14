import Link from "next/link";
import React from "react";

export default function AddToCartButton() {
    return (
        <Link href="" className="flex w-max items-center gap-2 text-white bg-main no-underline h-11 px-5 rounded-full hover:text-main hover:bg-hover hover:[&_svg]:stroke-main transition-colors">
            <svg 
                width={20} 
                height={20} 
                fill="none"
                className="transition-colors" 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3.22 13.713c-.716-2.86-1.073-4.29-.322-5.251C3.648 7.5 5.123 7.5 8.07 7.5h3.859c2.948 0 4.421 0 5.172.962.75.961.393 2.391-.322 5.25-.455 1.82-.681 2.729-1.36 3.259-.678.529-1.615.529-3.49.529H8.07c-1.875 0-2.812 0-3.49-.53-.679-.53-.906-1.438-1.36-3.257Z" stroke="#fff" stroke-width="1.5"/><path d="m16.25 7.915-.592-2.17c-.228-.838-.342-1.256-.576-1.572a2.084 2.084 0 0 0-.915-.698c-.367-.143-.8-.143-1.667-.143M3.75 7.915l.592-2.17c.228-.838.342-1.256.576-1.572.234-.314.55-.556.915-.698.367-.143.8-.143 1.667-.143" stroke="#fff" stroke-width="1.5"/><path d="M7.5 3.333a.833.833 0 0 1 .833-.833h3.334a.833.833 0 0 1 0 1.667H8.333a.833.833 0 0 1-.833-.834Z" stroke="#fff" stroke-width="1.5"/><path d="M12.499 13.415h-2.084V15.5a.416.416 0 1 1-.833 0v-2.084H7.499a.416.416 0 1 1 0-.833h2.083V10.5a.417.417 0 1 1 .833 0v2.083H12.5a.416.416 0 1 1 0 .833Z" fill="#fff"/></svg>
            <p className="font-bold">Adaugă în coș</p>
        </Link>
    );
}