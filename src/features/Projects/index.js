import { SkillsContainer, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio, selectPortfolio, selectPortfolioState } from "./portfolioSlice";
import { useEffect } from "react";
import { Project } from "./porfolioState";

export const ProjectSection = () => {
  const dispatch = useDispatch();
  const portfolioState = useSelector(selectPortfolioState);
  const portfolio = useSelector(selectPortfolio);

  useEffect(() => {
    dispatch(fetchPortfolio());
  }, [dispatch]);
  return (

    <Wrapper>
      Portfolio <br />
      My recent projects
      <Project
        portfolio={portfolio}
        portfolioState={portfolioState}
      />
    </Wrapper>
  );
};
