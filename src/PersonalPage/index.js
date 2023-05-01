import { Header } from "./Header";
import { Container } from "../common/Container";
import { goalsHeader, skillsHeader } from "../namePlate";
import { SkillsList } from "./Lists/SkillsList";
import { FeatureList } from "./Lists/FeatureList";
import { ProjectSection } from "./Projects";
import { Footer } from "./Footer";
import React from "react";

export const PersonalPage = () => {
  return (
    <>
      <Header />
      <Container
        title={skillsHeader}
        body={<SkillsList />} />
      <Container
        title={goalsHeader}
        body={<FeatureList />}
      />
      <ProjectSection />
      <Footer />
    </>
  );
};