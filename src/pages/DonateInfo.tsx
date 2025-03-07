import styled from "styled-components";
import IntroBanner from "../components/base/IntroBanner";

const DonateInfo = () => {
  return (
    <AdoptSection>
      <IntroBanner />
      <TextContainer>
        <TitleText>후원 방법</TitleText>
        <LinkBox>
          <LinkText>
            <a
              href="https://cafe.naver.com/943400/4572?tc=shared_link"
              target="_blank"
            >
              여수 여미지 보호소 블로그
            </a>
          </LinkText>

          <p>상단 링크로 여미지 보호소를 후원할 수 있습니다</p>
        </LinkBox>

        <IntroBox>
          <ListText>
            <p>1. 카페에 등록된 후원계좌로 사랑을 보내주세요</p>
            <p>
              2. 사료나 간식, 배변봉투, 귀 세정제 등 후원품으로 따뜻한 마음을
              나눠주세요
            </p>
          </ListText>

          <SmallText>
            <p>소중한 후원은 여미지 보호소에 큰 힘이 됩니다</p>
          </SmallText>
        </IntroBox>
      </TextContainer>
    </AdoptSection>
  );
};

const AdoptSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  gap: 80px;
`;
const LinkText = styled.div`
  font-weight: 500;
  color: #4463ff;

  :visited {
    color: #4463ff;
  }
`;
const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-weight: 400;
`;
const ListText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: 400;
`;
const SmallText = styled.div`
  font-size: 16px;
  color: #888888;
  font-weight: 500;
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
  padding: 0 18% 128px;
`;

export default DonateInfo;
