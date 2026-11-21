import React from "react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Contact />
    </>
  );
}
