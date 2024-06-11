import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import Logo from "../../../assets/images/logo.png";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setCategoriesOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = (
    <>
      <li className="py-1 pl-12 pr-20 sm:p-0 hover:bg-white/75">
        <Link to="" className="inline-block w-full text-xl">
          হোম
        </Link>
      </li>
      <li className="py-1 pl-12 pr-20 sm:p-0 hover:bg-white/75">
        <Link to="" className="inline-block w-full text-xl">
          বই
        </Link>
      </li>
      <li className="py-1 pl-12 pr-20 sm:p-0 hover:bg-white/75">
        <Link to="" className="inline-block w-full text-xl">
          লেখক
        </Link>
      </li>
      <li
        className="py-1 pl-12 pr-20 sm:p-0 hover:bg-white/75 relative"
        ref={dropdownRef}
        onClick={() => {
          setCategoriesOpen(!categoriesOpen);
        }}
      >
        <span className="flex items-center text-xl cursor-pointer">
          ক্যাটাগরি
          <MdOutlineChevronRight className="rotate-90" />
        </span>
        {categoriesOpen && (
          <ul className="absolute top-3 sm:top-5 left-44 sm:left-5 bg-primary py-1 rounded-sm">
            <li className="pl-2 pr-5 py-1 hover:bg-white">
              <Link>History</Link>
            </li>
            <li className="pl-2 pr-5 py-1 hover:bg-white">
              <Link>Story</Link>
            </li>
            <li className="pl-2 pr-5 py-1 hover:bg-white">
              <Link>Doctrine</Link>
            </li>
          </ul>
        )}
      </li>
      <li className="py-1 pl-12 pr-20 sm:p-0 hover:bg-white/75">
        <Link to="" className="inline-block w-full text-xl">
          প্যাকেজ
        </Link>
      </li>
      <li className="py-1 pl-12 pr-20 sm:p-0 hover:bg-white/75">
        <Link to="" className="inline-block w-full text-xl">
          ব্লগ
        </Link>
      </li>
    </>
  );

  return (
    <>
      <header className="z-20 w-full bg-white/90 shadow-lg shadow-slate-700/5 py-2">
        <div className="container">
          <nav className="flex justify-between items-center">
            <a className="">
              <img src={Logo} className="h-12" alt="" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden sm:block">
              <ul className="flex items-center space-x-3">{menuItems}</ul>
            </div>
            {/* Mobile Menu */}
            {isToggleOpen && (
              <div className="block sm:hidden fixed top-0 left-0 h-screen bg-slate-500">
                <ul className="flex flex-col">{menuItems}</ul>
              </div>
            )}

            <div className="flex items-center space-x-3">
              <IoCartOutline className="text-xl" />
              <button className="border border-black rounded-sm px-5 hover:bg-slate-50/75">
                Sign In
              </button>
              <button
                className="sm:hidden"
                onClick={() => {
                  setIsToggleOpen(!isToggleOpen);
                }}
              >
                <HiOutlineBars3BottomRight />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
