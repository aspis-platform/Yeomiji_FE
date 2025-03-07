import styled from "styled-components";

const Supplies = () => {
  return (
    <TextContainer>
      <TitleText>준비물</TitleText>
      <TextBox>
        <li>편한 복장 or 방진복</li>
        <li>마스크</li>
        <li>장갑(목장갑, 고무장갑 등)</li>
        <li>편한 신발 or 장화</li>
        <li>개인 물</li>
      </TextBox>
    </TextContainer>
  );
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  font-size: 20px;
`;
const TitleText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const TextBox = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Supplies;
