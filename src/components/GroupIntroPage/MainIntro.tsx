import React from "react";
import styled from "styled-components";

const MainIntro = () => {
  return (
    <MainIntroSection>
      <TextSection>
        <TextContainer>
          <TitleText>설립목적</TitleText>
          <LongText>
            본회는 생명존중의 정신으로 유기동물 구조, 치료 및 보호를 통한 동물복지 증진활동으로 유기동물의 생명보장과 동물보호 문화 확산으로 사람과 동물이 모두 행복하게 공존하고자 함을 목적으로 한다.
          </LongText>
        </TextContainer>
        <TextContainer>
          <TitleText>주요사업</TitleText>
          <ListText>
            <li>
              동물이 동물답게 살아가고 고통을 피할 수
              있는 최소한의 복지를 보장하는 최선의 인도적인 유기동물 보호
            </li>
            <li>유기동물 구조 및 치료 사업</li>
            <li>동물보호 캠페인, 교육사업</li>
            <li>동물보호 기금 마련을 위한 모금 사업</li>
          </ListText>
        </TextContainer>
      </TextSection>
    </MainIntroSection>
  );
};

const ListText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const LongText = styled.div`
  line-height: 34px;
`;
const TitleText = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const TextSection = styled.section`
  width: 100vw;
  padding: 0 18%;
  display: flex;
  flex-direction: column;
  gap: 88px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
`;
const MainIntroSection = styled.section`
  width: 100vw;
  height: 100%;
  padding: 80px 0 128px;
`;

export default MainIntro;
