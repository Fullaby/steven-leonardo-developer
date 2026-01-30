"use client";

import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Header/>
      <div className="masthead_cmp">
        <div className="masthead_cmp--text-content">
          <h1>Steven Leonardo</h1>
          <p>TEST</p>
          <div>
            <div>
              <Link href="">test</Link>
            </div>
          </div>
        </div>

        <div className="masthead_cmp--image-content">
          <div className="masthead_cmp--image-content-profile">
            <Image width="600" height="500" src="/profile_image.jpg" alt="test"/>
          </div>
        </div>
      </div>
      <div className="masthead_cmp">test</div>
    </div>
  );
}
