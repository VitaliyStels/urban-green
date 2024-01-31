import React from "react";
import Controls from "./Controls";
import AccentButton from "./AccentButton";

export default function Navbar() {
    return (
      <div className="flex flex-row p-5 justify-between">
        <div className="logo font-semibold">UbranGreen Tech</div>
        <Controls />
        <AccentButton name="Contact Us" url="#" />
      </div>
    );
}