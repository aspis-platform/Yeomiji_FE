import styled from "styled-components";
import { IntroBanner } from "../components/base";

const AdoptionInfo = () => {
  return (
    <AdoptSection>
      <IntroBanner />
      <TextContainer>
        <TitleText>입양 / 임보 신청</TitleText>
        <LinkBox>
          <LinkText>
            <a
              href="https://cafe.naver.com/943400/4572?tc=shared_link"
              target="_blank"
            >
              여수 여미지 보호소 블로그
            </a>
          </LinkText>

          <p>상단 링크로 입양 / 임보를 신청할 수 있습니다</p>
        </LinkBox>

        <IntroBox>
          <ListText>
            <p>1. 카페에 게시된 입양 및 임보 신청 방법 공지를 확인해주세요</p>
            <p>2. 공지에 안내된 연락처로 언제든 문의해주세요</p>
          </ListText>

          <SmallText>
            <p>연락처는 블로그에 있습니다</p>
            <p>작은 관심과 사랑이 아이들에게 큰 변화를 선물합니다</p>
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

export default AdoptionInfo;
