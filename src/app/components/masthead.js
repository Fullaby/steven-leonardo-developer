import Link from "next/link";
import Image from "next/image";
import DevelopProject from "../components/developProject";
export default function Masthead() {
  return (
    <div className="masthead_cmp component" id="masthead">
      <div className="masthead_cmp-wrapper">
        <div className="masthead_cmp--text-content">
          <div>
            <h1>Steven Leonardo</h1>
            <h3>Fullstack Developer</h3>
          </div>
          <p>
            Software engineer with 3+ years’ experience building and supporting
            production web applications used by real users. Strong in
            JavaScript, with hands-on experience integrating backend APIs and
            working in fast-moving, product-led teams. Known for owning features
            end-to-end, learning quickly, and collaborating closely with
            engineers, product, and design to deliver reliable, high-impact
            software.
          </p>
          <div className="masthead_cmp--button-link-wrapper">
            <Link href="#case-studies">
              <div className="masthead_cmp--button-link">
                Let's get started &gt;
              </div>
            </Link>
          </div>
        </div>
        <div className="masthead_cmp--image-content">
          <div className="masthead_cmp--image-content-profile">
            <Image
              width="600"
              height="500"
              src="/profile-image.jpg"
              alt="project"
            />
          </div>
        </div>
      </div>
      <DevelopProject />
    </div>
  );
}
