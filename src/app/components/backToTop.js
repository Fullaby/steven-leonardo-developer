import { useEffect, useState } from "react";
import Image from "next/image";
export default function BackToTop() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={backToTop}
      className={`backToTop_cmp${isScrolled ? "" : " hidden"} component`}
    >
      <Image
        className="backToTop_cmp-icon"
        width="50"
        height="50"
        src="/up.png"
        alt="chevron-up"
      />
    </div>
  );
}
