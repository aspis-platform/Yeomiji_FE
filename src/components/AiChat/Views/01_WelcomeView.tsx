import styled from "styled-components";
import { dog_img_3d, yeomiji_ai_logo } from "../../../assets";
import { theme } from "../../../style";

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeView = ({ onNext }: WelcomeScreenProps) => {
  return (
    <>
      <DogImage src={dog_img_3d} alt="강아지 이미지" />
      <BottomSection>
        <ContinueButton onClick={onNext}>시작하기</ContinueButton>
        <SignatureContainer>
          <img src={yeomiji_ai_logo} alt="Gram Ai" />
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
