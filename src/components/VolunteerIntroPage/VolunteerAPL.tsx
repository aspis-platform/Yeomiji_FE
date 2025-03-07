import styled from "styled-components";
import { theme } from "../../style/theme";

const VolunteerAPL = () => {
  return (
    <TextContainer>
      <TitleText>1365 봉사등록 신청</TitleText>
      <TextBox>
        <p>1365 가입후 만식만(스태프님) 에게 연락</p>
        <SmallText>
          <p>
            봉사 후 봉사하신 모습이 담긴 사진(얼굴이 나오게 /마스크벗고) 찍으신
            후 생년월일 연락처와 함께 사진 개인톡으로 남겨주셔야 봉사시간 등록이
            가능합니다
          </p>
        </SmallText>
      </TextBox>
    </TextContainer>
  );
};

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const TitleText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  font-size: 20px;
`;
const SmallText = styled.div`
  font-size: 16px;
  color: ${theme.color.red};
  font-weight: 500;
  padding-right: 18%;
`;

export default VolunteerAPL;
