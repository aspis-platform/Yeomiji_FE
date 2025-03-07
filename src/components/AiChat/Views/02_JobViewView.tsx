import styled from "styled-components";
import { theme } from "../../../style/theme";
import AI_logo from "../../../assets/YeomijiAiLogoFull.svg";

interface JobInputScreenProps {
  job: string;
  onJobChange: (job: string) => void;
  onNext: () => void;
}

const JobView = (props: JobInputScreenProps) => {
  return (
    <>
      <InputContainer>
        <input
          type="text"
          placeholder="직업을 입력하세요"
          value={props.job}
          onChange={(e) => props.onJobChange(e.target.value)}
        />
      </InputContainer>
      <BottomSection>
        <ContinueButton onClick={props.onNext}>다음</ContinueButton>
        <SignatureContainer>
          <img src={AI_logo} alt="AI 로고" />
          <p>개인정보 처리방침 및 사용약관</p>
        </SignatureContainer>
      </BottomSection>
    </>
  );
};

const InputContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    padding: 20px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 20px;

    &::placeholder {
      color: #bbbbbb;
    }
  }
`;

const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

const ContinueButton = styled.button`
  width: 480px;
  height: 80px;
  background-color: #86b2f5;
  border: none;
  border-radius: 23px;
  color: ${theme.color.white};
  font-size: 32px;
  font-weight: 600;
  cursor: pointer;
`;

const SignatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${theme.color.black};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export default JobView;
