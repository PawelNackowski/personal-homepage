import { Container } from "./common/Container";
import { FeatureList } from "./features/Lists/FeatureList";
import { SkillsList } from "./features/Lists/SkillsList";

function App() {
  return (
    <>
      <Container
        title={"My skillset includes 🛠️"}
        body={<SkillsList />} />
      <Container
        title={"What I want to learn next 🚀"}
        body={<FeatureList />}
      />
    </>
  );
}

export default App;