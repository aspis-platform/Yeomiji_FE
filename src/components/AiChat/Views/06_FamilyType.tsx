import styled from "styled-components";
import { theme } from "../../../style";
import { yeomiji_ai_logo, triangle } from "../../../assets";

interface FamilyTypeSelectProps {
  familyType: string;
  onFamilyTypeSelect: (familyType: string) => void;
  onNext: () => void;
}

const FamilyType = ({ onFamilyTypeSelect, onNext }: FamilyTypeSelectProps) => {
  const data = [
    {
      id: 1,
      name: "혼자 사는 1인 가구",
    },
    {
      id: 2,
      name: "부부만 있는 가구(아이 없음)",
    },
    {
      id: 3,
      name: "어린이가 있는 가구",
    },
    {
      id: 4,
      name: "청소년 또는 성인 자녀가 있는 가구",
    },
    {
      id: 5,
      name: "노인이 있는 가구",
    },
    {
      id: 6,
      name: "다자녀 가구",
    },
    {
      id: 7,
      name: "반려 동물이 이미 있는 가구",
    },
    {
      id: 8,
      name: "대가족(3세대 이상 함께 거주)",
    },
  ];

  return (
    <>
      <SelectionContainer>
        <select defaultValue={"가족 형태를 선택하세요."}>
          <option disabled hidden>
            가족 형태를 선택하세요.
          </option>
          {data.map((e) => (
            <option
              onChange={() => onFamilyTypeSelect(e.name)}
              value={e.name}
              key={e.id}
            >
              {e.name}
            </option>
          ))}
        </select>
        <img src={triangle} />
      </SelectionContainer>

      <BottomSection>
        <ContinueButton onClick={onNext}>다음</ContinueButton>
        <SignatureContainer>
          <img src={yeomiji_ai_logo} alt="AI 로고" />
          <p>개인정보 처리방침 및 사용약관</p>
        </SignatureContainer>
      </BottomSection>
    </>
  );
};

const SelectionContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  select {
    width: 100%;
    padding: 20px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 20px;

    cursor: pointer;
    appearance: none;
  }

  img {
    position: absolute;
    right: 10px;
    pointer-events: none;
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

export default FamilyType;
