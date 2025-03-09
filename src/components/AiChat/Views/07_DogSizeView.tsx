import styled from "styled-components";
import { theme } from "../../../style";
import { yeomiji_ai_logo, dog_img_3d } from "../../../assets";

interface DogSizeViewProps {
  onDogSizeSelect: (size: string) => void;
  onNext: () => void;
  dogSize: string;
}

const DogSizeView = ({
  onDogSizeSelect,
  onNext,
  dogSize,
}: DogSizeViewProps) => {
  const data = [
    {
      ko: "소형견",
      en: "S",
      selected: dogSize === "S",
    },
    {
      ko: "중형견",
      en: "M",
      selected: dogSize === "M",
    },
    {
      ko: "대형견",
      en: "L",
      selected: dogSize === "L",
    },
  ];

  return (
    <>
      <OptionContainer>
        {data.map((e) => (
          <SelectionButton
            $selected={e.selected}
            onClick={() => onDogSizeSelect(e.en)}
            key={e.en}
          >
            <img src={dog_img_3d} />
            <TextContainer>
              <BigText>{e.ko}</BigText>
            </TextContainer>
          </SelectionButton>
        ))}
      </OptionContainer>

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

const BigText = styled.h4`
  font-size: 20px;
  color: black;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 16px;
  font-weight: 600;
  color: #9c9c9c;
`;

const SelectionButton = styled.button<{ $selected: boolean }>`
  width: 460px;
  height: 92px;
  background-color: white;
  border: 1px solid ${({ $selected }) => ($selected ? "#73D1FA" : "#e0e0e0")};
  border-width: ${({ $selected }) => ($selected ? "2px" : "1px")};
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  padding-left: 10px;

  img {
    width: 80px;
    height: 80px;
  }

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  }
  cursor: pointer;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export default DogSizeView;
