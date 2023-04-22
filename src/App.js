import { Container } from "./common/Container";
import { Footer } from "./features/Footer";
import { Header } from "./features/Header";
import { FeatureList } from "./features/Lists/FeatureList";
import { SkillsList } from "./features/Lists/SkillsList";
import { ProjectSection } from "./features/Projects";
import { goals, goalsHeader, skillsHeader } from "./namePlate";

function App() {

  return (
    <>
      <Header />
      <Container
        title={skillsHeader}
        body={<SkillsList/>}/>
      <Container
        title={goalsHeader}
        body={<FeatureList />}
      />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default App;