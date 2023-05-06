import { Header } from "./Header";
import { Section } from "../common/Section";
import { goalsHeader, skillsHeader } from "../namePlate";
import { SkillsList } from "./Lists/SkillsList";
import { FeatureList } from "./Lists/FeatureList";
import { ProjectSection } from "./Projects";
import { Footer } from "./Footer";
import React from "react";

export const PersonalPage = () => (
  <>
    <Header />
    <Section
      title={skillsHeader}
      body={<SkillsList />} />
    <Section
      title={goalsHeader}
      body={<FeatureList />}
    />
    <ProjectSection />
    <Footer />
  </>
);
