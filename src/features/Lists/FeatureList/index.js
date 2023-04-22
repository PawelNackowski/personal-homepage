import { goals } from "../../../namePlate";
import { ListItem } from "../styled";

export const FeatureList = () => {
  return (
    <>
      {goals.map((goal) => (
        <ListItem key={goal}>{goal}</ListItem>
      ))}
    </>
  );
};