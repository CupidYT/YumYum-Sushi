import React from "react";
import Logo from "../../ui/Logo/Logo";
import Menu from "./Menu/Menu";
import RightSide from "./RightSide/RightSide";


export default function Header() {
    return (
        <header className="p-4 bg-bg">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center py-4 px-8 bg-white rounded-3xl">
                    <Logo width={100} height={50} />
                    <Menu />
                    <RightSide />
                </nav>
            </div>
        </header>
    );
}