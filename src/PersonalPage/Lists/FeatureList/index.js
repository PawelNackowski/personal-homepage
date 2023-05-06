import { goals } from "../../../namePlate";
import { ListItem } from "../styled";

export const FeatureList = () => (
  <>
    {goals.map((goal) => (
      <ListItem key={goal}>{goal}</ListItem>
    ))}
  </>
);