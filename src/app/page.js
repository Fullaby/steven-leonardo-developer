"use client";

import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="masthead_cmp">
        <div className="masthead_cmp--text-content">
          <h1>Steven Leonardo</h1>
          <p>
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <div className="masthead_cmp--button-link-wrapper">
            <div className="masthead_cmp--button-link">
              <Link href="">Let's get started &gt;</Link>
            </div>
          </div>
        </div>

        <div className="masthead_cmp--image-content">
          <div className="masthead_cmp--image-content-profile">
            <Image
              width="600"
              height="500"
              src="/profile_image.jpg"
              alt="test"
            />
          </div>
        </div>
      </div>
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
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
      <div className="masthead_cmp">test</div>
    </div>
  );
}
