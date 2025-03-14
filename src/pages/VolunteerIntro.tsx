import styled from "styled-components";
import { IntroBanner } from "../components/base";
import { MainVolunteer } from "../components/VolunteerIntroPage";

const VolunteerIntro = () => {
  return (
    <VolunteerSection>
      <IntroBanner />
      <MainVolunteer />
    </VolunteerSection>
  );
};

const VolunteerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default VolunteerIntro;
