import { Wrapper, Header, SubHeader } from "./styled";
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
      <Header>Portfolio</Header>
      <SubHeader>My recent projects</SubHeader>
      <Project
        portfolio={portfolio}
        portfolioState={portfolioState}
      />
    </Wrapper>
  );
};
