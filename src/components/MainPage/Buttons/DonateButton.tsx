import styled from "styled-components";
import { theme } from "../../../style/theme";
import donate_image from "../../../assets/donate-image.svg";
import donate_image_green from "../../../assets/donate-image-green.svg";
import { Link } from "react-router-dom";

const DonateButton = () => {
  return (
    <Link to={"/donation"} style={{ textDecoration: "none" }}>
      <ButtonContainer>
        <MainButton>
          <OrgImg src={donate_image} />
          <ChgImg src={donate_image_green} />
        </MainButton>
        <ButtonDesc>후원 안내</ButtonDesc>
      </ButtonContainer>
    </Link>
  );
};

const MainButton = styled.button`
  border: 4px solid #575757;
  border-radius: 100px;

  background-color: ${theme.color.white};
  width: 150px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: border-color 0.3s ease;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    border: 4px solid #575757;
  }
`;
const ButtonDesc = styled.p`
  font-size: 26px;
  font-weight: 500;
  color: #575757;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const OrgImg = styled.img`
  width: 55%;
  height: 55%;
  display: block;
`;
const ChgImg = styled.img`
  width: 55%;
  height: 55%;
  display: none;
`;
const ButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 12px;
  }

  &:hover {
    ${MainButton} {
      border-color: ${theme.color.main[2]};
    }

    ${ButtonDesc} {
      color: ${theme.color.main[2]};
    }

    ${OrgImg} {
      display: none;
    }

    ${ChgImg} {
      display: block;
    }
  }
`;

export default DonateButton;
