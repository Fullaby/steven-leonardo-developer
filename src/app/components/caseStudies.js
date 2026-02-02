import Image from "next/image";
export default function CaseStudies() {
  return (
    <div className="case-studies_cmp" id="case-studies">
      <div className="case-studies_cmp--text-title">
        <h1>CASE STUDIES</h1>
        <p>
          Solving real user and business problems through scalable software for
          3+ years.
        </p>
      </div>
      <div className="case-studies_cmp-project-card" id="pphg">
        <div className="case-studies_cmp-project-card-content">
          <div className="case-studies_cmp-project-card-content-image">
            <Image width="1000" height="1000" src="/pphg.jpg" alt="TMA" />
          </div>
          <div className="case-studies_cmp-project-card-content-text">
            <span>Hospitality</span>
            <h2>Pan Pacific Hotel Group</h2>
            <p>
              Contributed to the delivery and ongoing enhancement of Pan Pacific
              Hotels Group’s AEM-based digital platforms at Faculty Digital.
              Worked across the stack with HTML, SCSS, Vue.js, AEM, and Java backend
              services, focusing on component development, bug fixing, and
              proposing technical solutions to improve scalability and long-term
              maintainability.
            </p>
          </div>
        </div>
      </div>
      <div className="case-studies_cmp-project-card" id="tma">
        <div className="case-studies_cmp-project-card-content">
          <div className="case-studies_cmp-project-card-content-image">
            <Image width="1000" height="100" src="/TMA.jpg" alt="TMA" />
          </div>
          <div className="case-studies_cmp-project-card-content-text">
            <span>Insurance</span>
            <h2>Tokio Marine</h2>
            <p>
              At Faculty Digital, I contributed to enterprise insurance systems
              for Tokio Marine Asia, working across the stack with SCSS, HTML, jQuery,
              AEM, Java backend services, REST APIs, and AWS infrastructure.
            </p>
          </div>
        </div>
      </div>
      <div className="case-studies_cmp-project-card" id="allianz">
        <div className="case-studies_cmp-project-card-content">
          <div className="case-studies_cmp-project-card-content-image">
            <Image width="1000" height="1000" src="/allianz.jpg" alt="TMA" />
          </div>
          <div className="case-studies_cmp-project-card-content-text">
            <span>Insurance</span>
            <h2>Allianz ayudhya</h2>
            <p>
              While working at Faculty Digital, I supported Allianz Ayudhya by
              maintaining AEM-based websites using SCSS, HTML and JavaScript (DOM
              manipulation). I focused on bug fixing, enhancing existing
              components, and ensuring consistent behavior across browsers and
              devices.
            </p>
          </div>
        </div>
      </div>
      <div className="case-studies_cmp-project-card" id="bct">
        <div className="case-studies_cmp-project-card-content">
          <div className="case-studies_cmp-project-card-content-image">
            <Image width="1000" height="1000" src="/bct.jpg" alt="TMA" />
          </div>
          <div className="case-studies_cmp-project-card-content-text">
            <span>Finance</span>
            <h2>BCT Hongkong</h2>
            <p>
              While working at Faculty Digital, I contributed to the development
              of a finance administration system for BCT Hong Kong using
              React.js, Java, JavaScript, SCSS, and AEM. My responsibilities included
              building complex admin features, integrating secure APIs, and
              supporting authentication flows to ensure sensitive investment
              data was accessible only to authorized users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
