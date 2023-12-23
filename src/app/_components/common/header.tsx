import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 header">
      <div className="container h-full mx-auto flex items-center justify-between">
        <h1 className="font-bold text-base md:text-2xl">
          <a href="/">クソザコエンジニア奮闘記</a>
        </h1>
        <nav className="md:block sm:hidden">
          <ul className="flex space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
