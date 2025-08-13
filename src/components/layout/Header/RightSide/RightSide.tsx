import React from "react";
import Language from "./Language/Language";
import CallButton from "../../../ui/CallButton/CallButton";
import Cart from "@/components/modals/Cart/Cart";

export default function RightSide() {

    return (
        <div className="flex items-center gap-6">
            <Language />
            <CallButton />
            <Cart />
        </div>
    );
}