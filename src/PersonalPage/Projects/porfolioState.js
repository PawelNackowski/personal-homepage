import { Loading } from "./Loading";
import { Tile } from "./Tile";
import { Error } from "./Error";

export const Project = ({ portfolioState, portfolio }) => {

  switch (portfolioState) {
    case "loading":
      return <Loading />;

    case "success":
      return <Tile portfolio={portfolio} />;

    default:
      return <Error />;
  }

};