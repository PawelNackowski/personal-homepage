import { skills } from "../../../namePlate"
import { ListItem } from "../styled"

export const SkillsList = () => {
  return (
    <>
      {skills.map((skill) => (
        <ListItem key={skill}>
          {skill}
          </ListItem>
      ))}
    </>
  )
}