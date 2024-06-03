"use client";

import { Search } from "@mui/icons-material";
import { set } from "mongoose";
import Link from "next/link";
import { use, useEffect, useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handlescroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }


  useEffect(() => {
        window.addEventListener("scroll", handlescroll);

        return () => window.removeEventListener("scroll", handlescroll);
        
  }, []);
  return (
    <div className={`navbar ${isScrolled && "bg-black-1"}`}>
      <Link href="/">
        <img src="/assets/Logo.png" alt="Logo" className="logo" />
      </Link>
      <div className="nav-links">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/my-list" className="nav-link">
          My List
        </Link>
      </div>

      <div className="nav-right">
        <div className="search">
          <input
            placeholder="Search movie..."
            className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="icon" />
        </div>
        <img
          src="/assets/profile_icon.jpg"
          alt="profile"
          className="profile"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className="dropdown-menu">
            <Link href="/">Home</Link>
            <Link href="/my-list">My List</Link>
            <a href="">Log Out</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
