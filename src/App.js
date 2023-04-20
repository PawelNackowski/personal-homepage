import { Container } from "./common/Container";
import { Footer } from "./features/Footer";
import { Header } from "./features/Header";
import { FeatureList } from "./features/Lists/FeatureList";
import { SkillsList } from "./features/Lists/SkillsList";
import { ProjectSection } from "./features/Projects";

function App() {
  return (
    <>
      <Header />
      <Container
        title={"My skillset includes 🛠️"}
        body={<SkillsList />} />
      <Container
        title={"What I want to learn next 🚀"}
        body={<FeatureList />}
      />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default App;