import styled from "styled-components";
import { yeomiji_logo } from "../../assets";
import { theme } from "../../style";

const WelcomeBanner = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <MainContent>
          <LogoWrapper>
            <img src={yeomiji_logo} alt="여미지 로고" />
          </LogoWrapper>
          <ContentContainer>
            <Title>여수 여미지 보호소</Title>
            <Description>
              유기동물을 사랑하는 직장인 봉사자들이
              <br />
              돌보며 후원하고 있는 여수에 위치한 사설 유기동물 보호소 입니다
            </Description>
          </ContentContainer>
        </MainContent>
      </BannerContent>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: ${theme.color.main[1]};
  min-height: 360px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const BannerContent = styled.div`
  width: 80%;
  max-width: 1400px;
  height: 100%;
  min-height: 360px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 40px 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 30px 0;
    flex-direction: column;
    gap: 30px;
    width: 90%;
  }
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  flex-shrink: 0;

  img {
    width: 121px;
    height: 121px;
    display: block;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: ${theme.color.black};
  margin: 0;
  letter-spacing: -0.5px;
`;

const Description = styled.p`
  font-size: 20px;
  color: #666;
  line-height: 1.6;
  margin: 0;
  letter-spacing: -0.3px;
  white-space: pre-line;
`;

const CircleButtons = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }
`;

export default WelcomeBanner;
