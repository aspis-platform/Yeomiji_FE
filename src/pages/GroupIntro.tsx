import { IntroBanner } from "../components/base";
import { MainIntro } from "../components/GroupIntroPage";
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
