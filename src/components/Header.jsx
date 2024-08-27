import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navs = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/blogs",
      name: "Blogs",
    },
    {
      to: "/create",
      name: "Create",
    },
  ];
  return (
    <header className="w-full bg-white text-[#333] shadow-md fixed z-[99]">
      <div className="container mx-auto w-[1100px] flex justify-between h-[10vh] items-center">
        <Link to={"/"}>
          <img src="/logo.png" alt="" />
        </Link>

        <nav className="flex items-center gap-5">
          {navs.map((c, i) => (
            <p key={i} className="hover:text-[#7C4EE4]">
              <Link to={c.to}>{c.name}</Link>
            </p>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
