import React from "react";
import styled from "styled-components";
import dog_3d from "../../../assets/dog_img_3d.svg";
import AI_logo from "../../../assets/YeomijiAiLogoFull.svg";
import { theme } from "../../../style/theme";

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeView: React.FC<WelcomeScreenProps> = ({ onNext }) => {
  return (
    <>
      <DogImage src={dog_3d} alt="강아지 이미지" />
      <BottomSection>
        <ContinueButton onClick={onNext}>시작하기</ContinueButton>
        <SignatureContainer>
          <img src={AI_logo} alt="Gram Ai" />
          <p>개인정보 처리방침 및 사용약관</p>
        </SignatureContainer>
      </BottomSection>
    </>
  );
};

const DogImage = styled.img`
  margin: 20px 0;
`;

const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

const ContinueButton = styled.button`
  width: 480px;
  height: 80px;
  background-color: #86b2f5;
  border: none;
  border-radius: 23px;
  color: ${theme.color.white};
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;
`;

const SignatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${theme.color.black};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export default WelcomeView;