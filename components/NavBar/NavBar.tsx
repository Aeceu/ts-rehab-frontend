"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Service",
    url: "/service",
  },
  {
    id: 3,
    title: "Location",
    url: "/location",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id:6,
    title: "Resources",
    url: "/resources",
  },
  {
    id:7,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const NavBar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleNav = ()=>{
    setOpenNav((prev)=> !prev);
  }
  return (
    <nav className="w-full flex justify-between items-center p-8 shadow-md">
      <Link href="/" className="text_color font-semibold text-[25px] xl:inline hidden">
        Rehabify
      </Link>
      {/* Desktop Navigation Bar */}
      <ul
        className={"xl:flex hidden  items-center gap-16 "
        }
      >
        <FaTimes size="1.5rem" onClick={handleNav} className="xl:hidden flex" />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </ul>
      

      <DarkModeToggle/>

      {/* Mobile view */}
      <DropdownMenu>
        <DropdownMenuTrigger>
        <div className="rounded-full shadow-md xl:hidden flex items-center p-2 justify-center relative">
          <FaBars size="2rem" onClick={handleNav} className=" " />
        </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[100px] ">
        {links.map((link) => (
          <DropdownMenuItem key={link.id} >
            <Link  href={link.url} className="text-center w-full">
              {link.title} 
            </Link>
          </DropdownMenuItem>
       ))}
        </DropdownMenuContent>
      </DropdownMenu>

    </nav>
  )
}

export default NavBar