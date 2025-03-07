import styled from "styled-components";
import naverLogo from "../../assets/naver-cafe-logo.webp";
import { Link } from "react-router-dom";

const CafeButton = () => {
  return (
    <Link
      to={"https://cafe.naver.com/943400/4572?tc=shared_link"}
      style={{ textDecoration: "none" }}
      target="_blank"
    >
      <StyledBlogButton>
        <StyledImage src={naverLogo} alt="Naver Cafe Logo" />
        <span>카페</span>
      </StyledBlogButton>
    </Link>
  );
};

const StyledBlogButton = styled.button`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 4px;
  background-color: rgb(255, 255, 255);
  color: white;
  transition: transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  span {
    font-size: 16px;
    color: black;
    font-weight: 500;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImage = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

export default CafeButton;
