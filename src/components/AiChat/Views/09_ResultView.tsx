import styled from "styled-components";
import { theme } from "../../../style";
import { yeomiji_ai_logo, dog_img_3d } from "../../../assets";

interface ResultViewProps {
  breed: string;
  reason: string;
}

const ResultView = ({ breed, reason }: ResultViewProps) => {
  return (
    <>
      <ResultSection>
        <BreedName>{breed}</BreedName>
        <img src={dog_img_3d} />
        <div>{reason}</div>
      </ResultSection>

      <BottomSection>
        <SignatureContainer>
          <img src={yeomiji_ai_logo} alt="AI 로고" />
          <p>개인정보 처리방침 및 사용약관</p>
        </SignatureContainer>
      </BottomSection>
    </>
  );
};

const BreedName = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const ResultSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  font-size: 24px;
  font-weight: 300;

  img {
    width: 160px;
    height: 160px;
  }
`;

const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
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

export default ResultView;
