import styled from "styled-components";
import aiLogo from "../../assets/ai-icon.svg";
import { theme } from "../../style/theme";

const AiChatButton = () => {
  return (
    <StyledAiChatButton>
      <StyledImage src={aiLogo} alt="Naver Cafe Logo" />
      <span>AI 채팅</span>
    </StyledAiChatButton>
  );
};

const StyledAiChatButton = styled.button`
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
  background: linear-gradient(to bottom right, #73d1fa, #b46dff);
  color: white;
  transition: transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  span {
    font-size: 15px;
    font-weight: 500;
    color: ${theme.color.white};
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImage = styled.img`
  width: 41px;
  height: 41px;
  object-fit: contain;
`;

export default AiChatButton;
