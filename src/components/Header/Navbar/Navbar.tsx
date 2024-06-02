import Link, { LinkProps } from "next/link";
import React from "react";

interface NavbarItems {
  name: string;
  link: LinkProps;
}

const Navbar = () => {
  const navbarItems: NavbarItems[] = [{ name: "Home", link: { href: "" } }];
  return (
    <nav className="flex-row hidden md:flex">
      <ul>
        {navbarItems.map((item, index) => (
          <li key={index}>
            <Link href={item.link.href} title={item.name}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
