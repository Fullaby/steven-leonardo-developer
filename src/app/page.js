'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect,useState } from "react";
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div className={`header_cmp ${isScrolled? "scroll" : ""}`}>
        <div className="header_cmp--page-list">
          <ul>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Home</Link>
            </li>
          </ul>
        </div>
        <div className="header_cmp--logo-list">
          <ul>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Home</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="masthead_cmp">
        <div className="masthead_cmp--text-content">
          <h1>TEST</h1>
          <h1>TEST</h1>
        </div>

        <div>

        </div>
      </div>
        <div className="masthead_cmp">test</div>
    </div>
  );
}
