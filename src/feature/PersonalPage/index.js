import { Header } from "./Header";
import { Section } from "../../common/Section";
import { goalsHeader, skillsHeader } from "../../namePlate";
import { ProjectSection } from "./Projects";
import { Footer } from "./Footer";
import React from "react";
import { List } from "./Lists/List";

export const PersonalPage = () => (
  <>
    <Header />
    <Section
      title={skillsHeader}
      body={<List type={"skill"} />} />
    <Section
      title={goalsHeader}
      body={<List type={"goal"} />}
    />
    <ProjectSection />
    <Footer />
  </>
);
