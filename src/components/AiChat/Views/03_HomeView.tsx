import styled from "styled-components";
import { theme } from "../../../style/theme";
import AI_logo from "../../../assets/YeomijiAiLogoFull.svg";
import APT_img from "../../../assets/APT_img.svg";
import Villa_img from "../../../assets/Villa_img.svg";
import house_img from "../../../assets/house_img.svg";

interface HomeSelectScreenProps {
  onSelectHome: (home: string) => void;
  onNext: () => void;
  home: string;
}

const HomeView = (props: HomeSelectScreenProps) => {
  const data = [
    {
      ko: "아파트",
      en: "Apartment",
      img: APT_img,
      selected: props.home === "Apartment",
    },
    {
      ko: "빌라",
      en: "Villa",
      img: Villa_img,
      selected: props.home === "Villa",
    },
    {
      ko: "단독 주택",
      en: "House",
      img: house_img,
      selected: props.home === "House",
    },
  ];

  return (
    <>
      <OptionContainer>
        {data.map((e) => (
          <SelectionButton
            selected={e.selected}
            onClick={() => props.onSelectHome(e.en)}
          >
            <img src={e.img} />
            <TextContainer>
              <BigText>{e.ko}</BigText>
              <p>{e.en}</p>
            </TextContainer>
          </SelectionButton>
        ))}
      </OptionContainer>

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

const SelectionButton = styled.button<{ selected: boolean }>`
  width: 460px;
  height: 92px;
  background-color: white;
  border: 1px solid ${(props) => (props.selected ? "#73D1FA" : "#e0e0e0")};
  border-width: ${(props) => (props.selected ? "2px" : "1px")};
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

export default HomeView;
