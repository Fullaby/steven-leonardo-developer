import Link from "next/link";
import Image from "next/image";
export default function Masthead() {
  return (
    <div className="masthead_cmp" id="masthead">
      <div className="masthead_cmp--text-content">
        <h1>Steven Leonardo</h1>
        <p>
          Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="masthead_cmp--button-link-wrapper">
          <Link href="">
            <div className="masthead_cmp--button-link">
              Let's get started &gt;
            </div>
          </Link>
        </div>
      </div>

      <div className="masthead_cmp--image-content">
        <div className="masthead_cmp--image-content-profile">
          <Image width="600" height="500" src="/profile_image.jpg" alt="project" />
        </div>
      </div>
    </div>
  );
}
