import { skills } from "../../../namePlate";
import { ListItem } from "../styled";

export const SkillsList = () => (
  <>
    {skills.map((skill) => (
      <ListItem key={skill}>
        {skill}
      </ListItem>
    ))}
  </>
);