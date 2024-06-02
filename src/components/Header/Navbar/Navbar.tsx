import Link, { LinkProps } from "next/link";
import React from "react";

interface NavbarItems {
  name: string;
  link: LinkProps;
}

const Navbar = () => {
  const navbarItems: NavbarItems[] = [{ name: "Home", link: { href: "" } }];
  return (
    <nav>
      {navbarItems.map((item, index) => (
        <Link key={index} href={item.link.href} title={item.name}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
