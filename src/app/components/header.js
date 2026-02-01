import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`header_cmp ${isScrolled ? "scroll" : ""}`}>
      <div className="header_cmp--page-list">
        <ul>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Case Studies</Link>
          </li>
          <li>
            <Link href="">Experience</Link>
          </li>
          <li>
            <Link href="">Get In Touch</Link>
          </li>
        </ul>
      </div>
      <div className="header_cmp--logo-list">
        <ul>
          <li>
            <Link href="">
              <Image
                width="600"
                height="500"
                src="/profile_image.jpg"
                alt="test"
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image
                width="600"
                height="500"
                src="/profile_image.jpg"
                alt="test"
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image
                width="600"
                height="500"
                src="/profile_image.jpg"
                alt="test"
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image
                width="600"
                height="500"
                src="/profile_image.jpg"
                alt="test"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
