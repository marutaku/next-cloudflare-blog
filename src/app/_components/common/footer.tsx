import React from "react";
import { format } from "date-fns";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-800 relative w-screen bottom-0 flex items-center justify-end">
      <p className="container mx-auto px-4 py-2 text-white text-right">
        © {format(new Date(), "yyyy")} クソザコエンジニア奮闘記
      </p>
    </footer>
  );
};

export default Footer;
