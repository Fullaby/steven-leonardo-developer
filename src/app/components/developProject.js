import Image from "next/image";
import Link from "next/link";
export default function DevelopProject() {
  return (
    <div className="developed-project_cmp" id="project-developed">
      <div className="developed-project_cmp--title">
        <p>Project Developed</p>
      </div>
      <div className="developed-project_cmp--project-card-wrapper">
        <Link href="#pphg" className="developed-project_cmp--project-card">
          <span>
            <Image width="600" height="500" src="/pphg.jpg" alt="project" />
          </span>
        </Link>
        <Link href="#tma" className="developed-project_cmp--project-card">
          <span>
            <Image width="600" height="500" src="/TMA.jpg" alt="project" />
          </span>
        </Link>
        <Link href="#allianz" className="developed-project_cmp--project-card">
          <span>
            <Image width="600" height="500" src="/allianz.jpg" alt="project" />
          </span>
        </Link>
        <Link href="#bct" className="developed-project_cmp--project-card">
          <span>
            <Image width="600" height="500" src="/bct.jpg" alt="project" />
          </span>
        </Link>
      </div>
    </div>
  );
}
