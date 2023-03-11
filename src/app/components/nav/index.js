"use client";
import "../../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className={`menu-items stroke`}>
              {links.map(({ href, label }, index) => (
                <li key={index}>
                  <Link
                    className={`${pathname === href ? "activeTab" : null}`}
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h1 className="logo">
              <img src="/logo.png" alt="logo" className="logo-img" />
            </h1>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
