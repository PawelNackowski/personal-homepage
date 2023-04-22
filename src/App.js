import { Container } from "./common/Container";
import { Footer } from "./features/Footer";
import { Header } from "./features/Header";
import { FeatureList } from "./features/Lists/FeatureList";
import { SkillsList } from "./features/Lists/SkillsList";
import { ProjectSection } from "./features/Projects";
import { skillsHeader } from "./namePlate";

function App() {

  return (
    <>
      <Header />
      <Container
        title={skillsHeader}
        body={<SkillsList/>}/>
      <Container
        title={"What I want to learn next 🚀"}
        body={""}
      />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default App;