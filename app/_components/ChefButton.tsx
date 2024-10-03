"use client";
import { MouseEventHandler } from "react";

interface buttonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}
function ChefButton({ handleClick, children }: buttonProps) {
  return (
    <button
      onClick={handleClick}
      className="bg-emerald-200 p-4 rounded-2xl text-xl hover:bg-emerald-500"
    >
      {children}
    </button>
  );
}

export default ChefButton;
