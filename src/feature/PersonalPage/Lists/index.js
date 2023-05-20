import { ListItem } from "./styled";
import { goals, skills } from "../../../namePlate";

export const List = ({ type }) => {
  const listData = type === "goal" ? goals : type === "skill" ? skills : [];
  return (
    <>
      {listData.map((item) => (
        <ListItem key={item}>
          {item}
        </ListItem>
      ))}
    </>);
};
