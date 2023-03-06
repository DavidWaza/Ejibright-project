import "../../globals.css";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => {
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
            <ul className="menu-items">
              {links.map(({ href, label }, index) => (
                <li key={index}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
            <h1 className="logo">
              <Image src="/logo.png" alt="logo" height={90} width={130} />
            </h1>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
