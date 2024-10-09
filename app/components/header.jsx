import Link from "next/link";
import React from "react";

export default function Header({ word }) {
  return (
    <div className="top-0 left-0 right-0 h-[40px] bg-white bg-opacity-20">
      <Link href="/" className="fixed top-2 right-4 ">
        Начална Страница
      </Link>
    </div>
  );
}
