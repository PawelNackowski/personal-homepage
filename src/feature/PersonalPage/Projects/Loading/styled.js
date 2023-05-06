import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 88px 16px 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 56px 16px 0 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    margin: 48px 16px 0 16px;
  }
`;

export const StyledText = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.loader.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    font-size: 14px;
  }
`;
export const Loader = styled.div`
  align-self: center;
  width: 160px;
  height: 160px;
  margin: 48px;
  border: 12px solid ${({ theme }) => theme.colors.loader.border};
  border-top: 12px solid ${({ theme }) => theme.colors.loader.animation};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  transition: 0.5s;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100px;
    height: 100px;
    margin: 36px;
    border: 10px solid gray;
    border-top: 8px solid blue;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMedium}px) {
    width: 80px;
    height: 80px;
    margin: 36px;
    border: 8px solid gray;
    border-top: 8px solid blue;
  }
`;