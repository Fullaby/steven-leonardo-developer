import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const openMenu = () => {
    setMenu(true)
  };
  const closeMenu = () => {
    setMenu(false)
  };
  return (
    <div className={`header_cmp ${isScrolled ? "scroll" : ""} component`}>
      <div className="header_cmp--page-list">
        <Image
          className={`close-menu ${menu ? "show" : "hide"}`}
          src="/close.png"
          width={1000}
          height={1000}
          onClick={closeMenu}
        />
        <Image
          className={`open-menu ${menu ? "hide" : "show"}`}
          src="/burger.png"
          width={1000}
          height={1000}
          onClick={openMenu}
        />
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#case-studies">Case Studies</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#get-in-touch">Get In Touch</Link>
          </li>
        </ul>
      </div>
      <div className="header_cmp--logo-list">
        <ul>
          <li>
            <Link
              href="https://www.linkedin.com/in/steven-leonardo-lim"
              target="_blank"
            >
              <Image width="600" height="500" src="/linkedin.png" alt="test" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Fullaby" target="_blank">
              <Image width="600" height="500" src="/github.png" alt="test" />
            </Link>
          </li>
          <li>
            <Link href="mailto:stevenleonardo57@gmail.com">
              <Image width="600" height="500" src="/emaillogo.png" alt="test" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
