import styled from "styled-components";
import { WelcomeBanner, HelpYeomiji, AdoptNTC } from "../components/MainPage";

const HomepageMain = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <WelcomeBanner />
        <HelpYeomiji />
        <AdoptNTC />
      </StyledSection>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

export default HomepageMain;
