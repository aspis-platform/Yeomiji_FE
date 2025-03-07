import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import arrow_image from "../../assets/arrow-image.svg";

const MoreButton = () => {
  return (
    <ButtonContainer>
      <img src={arrow_image} alt="" />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  width: 60px;
  height: 60px;
  background-color: ${theme.color.white};
  border: none;
  border-radius: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
    height: 60%;
  }
`;

export default MoreButton;
