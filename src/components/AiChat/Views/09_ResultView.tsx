import styled from "styled-components";
import { theme } from "../../../style";
import { yeomiji_ai_logo, dog_img_3d } from "../../../assets";

const ResultView = () => {
  return (
    <>
      <ResultSection>
        <BreedName>포메라니안</BreedName>
        <img src={dog_img_3d} />
        <div>
          포메라니안은 작고 귀여운 외모와 풍성한 털을 가진 소형견으로, 활발하고
          영리한 성격이 특징입니다. 경계심이 강하지만 애정이 많아 주인과의
          유대감이 깊으며, 사회성이 좋으면 다른 동물과도 잘 지낼 수 있습니다.
          적절한 운동과 털 관리를 해주어야 건강하고 아름다운 모습을 유지할 수
          있습니다.
        </div>
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
