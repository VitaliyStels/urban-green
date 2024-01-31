import React from "react";
import Controls from "./Controls";
import AccentButton from "./AccentButton";

export default function Navbar() {
    return (
      <div className="flex flex-col lg:flex-row p-5 justify-between">
        <div className="logo font-bold lg:font-semibold text-center p-5 lg:p-0">UbranGreen Tech</div>
        <div className="flex justify-center">
          <Controls />
        </div>
        <AccentButton name="Contact Us" url="#" />
      </div>
    );
}