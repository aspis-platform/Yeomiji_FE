import React from "react";
import styled from "styled-components";
import logo_image from "../../assets/yeomiji-logo.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Logo>
          <img src={logo_image} alt="여미지 로고" />
        </Logo>
        <InfoContainer>
          <Title>모든 생명이 사랑을 만나는 여수 여미지 보호소</Title>
          <ShelterInfo>
            <InfoItem>사단법인 여미지유기동물보호협회</InfoItem>
            <InfoItem>대표자: 오민철</InfoItem>
            <InfoItem>주소: 전라남도 여수시</InfoItem>
            <InfoItem>사업자번호: 517-82-00673</InfoItem>
          </ShelterInfo>
        </InfoContainer>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  height: 160px;
  padding: 60px 20px;
  background-color: #f8f8f8;
  border-top: 1px solid #adadad;
  display: flex;
  align-items: center;
`;

const FooterContent = styled.div`
  width: 80%;
  margin: 0 10%;
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const Logo = styled.div`
  img {
    width: 100px;
    height: auto;
    filter: grayscale(100%) brightness(1.5);
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 21px;
  font-weight: 500;
  color: #858585;
  margin: 0;
  letter-spacing: -0.3px;
`;

const ShelterInfo = styled.div`
  font-size: 16px;
  color: #666;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  letter-spacing: -0.3px;
  line-height: 1.5;
`;

const InfoItem = styled.span`
  &:not(:last-child)::after {
    content: "";
    margin-left: 12px;
    border-right: 1px solid #ddd;
    height: 12px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    top: -1px;
  }
`;

export default Footer;
