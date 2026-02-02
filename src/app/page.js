"use client";

import Image from "next/image";
import Header from "./components/header";
import Masthead from "./components/masthead";
import CaseStudies from "./components/caseStudies";
import Experience from "./components/experience";
import GetInTouch from "./components/getInTouch";
import BackToTop from "./components/backToTop";
import Link from "next/link";
import Form from "next/form";
export default function Home() {
  return (
    <div>
      <Header />
      <Masthead />
      <CaseStudies />
      <Experience />
      <GetInTouch />
      <BackToTop />
    </div>
  );
}
