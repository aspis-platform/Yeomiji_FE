import React from "react";
import IntroBanner from "../components/base/IntroBanner";
import MainIntro from "../components/GroupIntroPage/MainIntro";
import styled from "styled-components";

const GroupIntro = () => {
  return (
    <IntroPageContainer>
      <IntroBanner />
      <MainIntro />
    </IntroPageContainer>
  );
};

const IntroPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GroupIntro;
