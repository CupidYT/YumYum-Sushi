import React from "react";
import "@/assets/fonts/fonts.css";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import RightSide from "./RightSide/RightSide";


export default function Header() {
    return (
        <header className="mt-4">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center py-4 px-8 bg-white rounded-xl">
                    <Logo />
                    <Menu />
                    <RightSide />
                </nav>
            </div>
        </header>
    );
}