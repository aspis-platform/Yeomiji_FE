import styled from "styled-components";

const HowToVolunteer = () => {
  return (
    <TextContainer>
      <TitleText>자원봉사 신청 방법</TitleText>
      <LinkBox>
        <LinkText>
          <a
            href="https://cafe.naver.com/943400/4572?tc=shared_link"
            target="_blank"
          >
            여수 여미지 보호소 블로그
          </a>
        </LinkText>

        <p>상단 링크로 봉사활동을 신청할 수 있습니다</p>
      </LinkBox>

      <IntroBox>
        <ListText>
          <p>1. 카페에 게시된 봉사 신청 글에 봉사 신청해주세요</p>
          <p>2. 신청 후, 만식맘(스태프님)께 전화 또는 카톡으로 연락주세요.</p>
        </ListText>

        <SmallText>
          <p>신청 양식과 연락처는 블로그에 안내되어 있습니다</p>
          <p>
            작은 도움도 아이들에게 큰 행복이 됩니다. 여러분의 참여를 기다립니다!
          </p>
        </SmallText>
      </IntroBox>
    </TextContainer>
  );
};

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
`;

export default HowToVolunteer;
