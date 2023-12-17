import React from "react";
import { format } from "date-fns";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-4 relative w-screen bottom-0">
      <div className="container mx-auto text-right flex items-center justify-end">
        <p>© {format(new Date(), "yyyy")} クソザコエンジニア奮闘記</p>
      </div>
    </footer>
  );
};

export default Footer;
