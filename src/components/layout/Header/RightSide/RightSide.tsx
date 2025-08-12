import React from "react";
import Language from "./Language/Language";
import CallButton from "./CallButton/CallButton";

export default function RightSide() {

    return (
        <div className="flex items-center gap-6">
            <Language />
            <CallButton />
        </div>
    );
}