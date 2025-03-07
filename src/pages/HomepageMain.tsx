import React from "react";
import WelcomeBanner from "../components/MainPage/WelcomeBanner";
import styled from "styled-components";
import HelpYeomiji from "../components/MainPage/HelpYeomiji";
import AdoptNTC from "../components/MainPage/AdoptNTC";
import AiChatModal from "../components/AiChat/AiChatModal";

const HomepageMain = () => {
  return (
    <StyledContainer>
      <AiChatModal />
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
