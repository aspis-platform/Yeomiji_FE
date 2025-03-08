import styled from "styled-components";
import { theme } from "../../style";

const Guideline = () => {
  return (
    <TextContainer>
      <TitleText>주의 사항(꼭 숙지해주세요)</TitleText>
      <TextBox>
        <li>봉사 시작 시간을 지켜주세요</li>
        <li>
          봉사는 아이들의 건강(안전)과 직결됩니다 봉사시간 만큼은 아이들에게
          최선을 다해주세요
        </li>
        <li>
          봉사 신청 후 참여가 불가능할 경우 최소 이틀 전 미리 말씀 부탁드립니다
        </li>
        <li>
          봉사 신청이 있는 날은 봉사자 인원에 맞춰 봉사 일정이 조율되기 때문에
          연락없는 취소는 지양해주세요
        </li>
        <ImportantSection>
          <li>당분간 미성년자 봉사자 신청은 받지 않습니다</li>
          <li>고등학교 졸업 이상 성인분만 봉사가 가능합니다</li>
        </ImportantSection>
      </TextBox>
    </TextContainer>
  );
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  font-size: 20px;
`;
const TitleText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.color.red};
`;
const TextBox = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const ImportantSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;

  color: ${theme.color.red};
`;

export default Guideline;
