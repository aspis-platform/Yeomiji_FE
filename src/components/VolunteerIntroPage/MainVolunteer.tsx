import React from "react";
import styled from "styled-components";
import HowToVolunteer from "./HowToVolunteer";
import VolunteerAPL from "./VolunteerAPL";
import Supplies from "./Supplies";
import Guideline from "./Guideline";

const MainVolunteer = () => {
  return (
    <VltContainer>
      <TextSection>
        <Guideline />
        <HowToVolunteer />
        <VolunteerAPL />
        <Supplies />
      </TextSection>
    </VltContainer>
  );
};

const TextSection = styled.section`
  width: 100vw;
  padding: 0 18%;
  display: flex;
  flex-direction: column;
  gap: 76px;
`;
const VltContainer = styled.section`
  width: 100vw;
  height: 100%;
  padding: 80px 0 128px;
`;

export default MainVolunteer;
