import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 header">
      <div className="container h-full mx-auto flex items-center justify-between">
        <h1 className="font-bold text-base md:text-2xl">
          <Link href="/">クソザコエンジニア奮闘記</Link>
        </h1>
        <nav className="md:block sm:hidden">
          <ul className="flex space-x-4 list-none">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
