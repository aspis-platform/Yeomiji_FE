import styled from "styled-components";
import { theme } from "../../style";
import MoreButton from "./MoreButton";
import NTCCard from "./NTCCard";

const AdoptNTC = () => {
  return (
    <NTCContainer>
      <TitleContainer>입양 공고</TitleContainer>
      <CardSection>
        <CardContainer>
          <NTCCard
            name="송이"
            gender="수컷"
            size="중형견"
            age={3}
            imageUrl="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
          />
          <NTCCard
            name="송이"
            gender="수컷"
            size="중형견"
            age={3}
            imageUrl="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
          />
          <NTCCard
            name="송이"
            gender="수컷"
            size="중형견"
            age={3}
            imageUrl="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
          />
          <NTCCard
            name="송이"
            gender="수컷"
            size="중형견"
            age={3}
            imageUrl="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
          />
        </CardContainer>
        <MoreButton />
      </CardSection>
    </NTCContainer>
  );
};

const CardSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 200px;
  width: 100vw;
  padding: 0 10%;
  align-items: center;

  @media (max-width: 1799px) {
    flex-direction: column;
    gap: 44px;
  }
`;
const CardContainer = styled.div`
  gap: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const TitleContainer = styled.div`
  padding-left: 10%;
  width: 100vh;
  color: ${theme.color.black};
  font-size: 20px;
  font-weight: 600;
`;
const NTCContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${theme.color.sub[3]};
  padding: 32px 0 50px 0;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export default AdoptNTC;
