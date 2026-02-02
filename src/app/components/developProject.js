import Image from "next/image";
export default function DevelopProject() {
  return (
    <div className="developed-project_cmp">
      <div className="developed-project_cmp--title">
        <p>Project Developed</p>
      </div>
      <div className="developed-project_cmp--project-card-wrapper">
        <div className="developed-project_cmp--project-card">
          <span>
            <Image
              width="600"
              height="500"
              src="/profile_image.jpg"
              alt="test"
            />
          </span>
        </div>
        <div className="developed-project_cmp--project-card">
          <span>
            <Image
              width="600"
              height="500"
              src="/profile_image.jpg"
              alt="test"
            />
          </span>
        </div>
        <div className="developed-project_cmp--project-card">
          <span>
            <Image
              width="600"
              height="500"
              src="/profile_image.jpg"
              alt="test"
            />
          </span>
        </div>
        <div className="developed-project_cmp--project-card">
          <span>
            <Image
              width="600"
              height="500"
              src="/profile_image.jpg"
              alt="test"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
