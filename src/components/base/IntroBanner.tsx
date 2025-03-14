import styled from "styled-components";
import { theme } from "../../style";
import { banner_img, quotes_left, quotes_right } from "../../assets";

const IntroBanner = () => {
  return (
    <BannerContainer>
      <TextContainer>
        <QuoteRow>
          <img src={quotes_left} />
          <TextBox>
            <p>유기동물을 사랑하는</p>
            <p>직장인 봉사자들이</p>
            <p>돌보며 후원하고 있는</p>
            <p>여수에 위치한 사설 유기동물 보호소</p>
          </TextBox>
        </QuoteRow>

        <RightQuote src={quotes_right} />
      </TextContainer>
      <ImageContainer>
        <img src={banner_img} alt="" />
      </ImageContainer>
    </BannerContainer>
  );
};

const RightQuote = styled.img`
  align-self: flex-end;
`;
const QuoteRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
const TextBox = styled.div`
  font-size: 28px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-content: space-evenly;

  img {
    width: 20px;
    height: 20px;
  }
`;
const BannerContainer = styled.div`
  width: 100vw;
  height: 360px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.color.main[1]};
  padding: 0 10%;
`;
const ImageContainer = styled.div`
  @media (max-width: 1227px) {
    display: none;
  }
`;

export default IntroBanner;
