import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import cross_img from "../../assets/cross-img.svg";
import WelcomeView from "./Views/01_WelcomeView";
import JobView from "./Views/02_JobViewView";
import HomeView from "./Views/03_HomeView";
import HouseOwnership from "./Views/04_HouseOwnership";
import PersonalityView from "./Views/05_PersonalityView";
import FamilyType from "./Views/06_FamilyType";
import DogSizeView from "./Views/07_DogSizeView";
import ActivityRate from "./Views/08_ActivityRate";
import ResultView from "./Views/09_ResultView";

const AiChatModal = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [job, setJob] = useState("");
  const [home, setHome] = useState("");
  const [ownership, setOwnership] = useState("");
  const [personality, setPersonality] = useState("");
  const [familyType, setFamilyType] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [activityRate, setActivityRate] = useState("");

  const goToNext = () => {
    setCurrentScreen(currentScreen + 1);
  };

  const screenTitles = [
    {
      title: "당신에게 잘 맞는 반려 견종을 찾아보세요",
      subtitle: "AI가 당신에게 맞는 애견을 찾아드려요",
    },
    {
      title: "직업을 알려주세요",
      subtitle: "수집한 개인정보는 Ai모델에만 전달되고 저장되지 않아요",
    },
    {
      title: "집 형태를 알려주세요",
      subtitle: "수집한 개인정보는 Ai모델에만 전달되고 저장되지 않아요",
    },
    {
      title: "주택 소유 여부를 알려주세요",
      subtitle: "수집한 개인정보는 Ai모델에만 전달되고 저장되지 않아요",
    },
    {
      title: "견주의 성격을 알려주세요",
      subtitle: "수집한 개인정보는 Ai모델에만 전달되고 저장되지 않아요",
    },
    {
      title: "가족 형태를 알려주세요",
      subtitle: "수집한 개인정보는 Ai모델에만 전달되고 저장되지 않아요",
    },
    {
      title: "선호하는 반려견 크기를 알려주세요",
      subtitle: "수집한 개인정보는 Ai모델에만 전달되고 저장되지 않아요",
    },
    {
      title: "선호하는 반려견의 활동량을 알려주세요",
      subtitle: "수집한 개인정보는 Ai모델에만 전달되고 저장되지 않아요",
    },
    {
      title: "당신에게 잘 맞는 반려 견종은...",
      subtitle: "",
    },
  ];

  return (
    <ChatContainer>
      <TopContainer>
        <Title>
          <Question>{screenTitles[currentScreen].title}</Question>
          <p>{screenTitles[currentScreen].subtitle}</p>
        </Title>
        <CloseButton>
          <img src={cross_img} alt="닫기" />
        </CloseButton>
      </TopContainer>

      {currentScreen === 0 && <WelcomeView onNext={goToNext} />}

      {currentScreen === 1 && (
        <JobView job={job} onJobChange={setJob} onNext={goToNext} />
      )}

      {currentScreen === 2 && (
        <HomeView home={home} onSelectHome={setHome} onNext={goToNext} />
      )}

      {currentScreen === 3 && (
        <HouseOwnership
          ownership={ownership}
          onSelectOwnership={setOwnership}
          onNext={goToNext}
        />
      )}

      {currentScreen === 4 && (
        <PersonalityView
          personality={personality}
          onSelectPersonality={setPersonality}
          onNext={goToNext}
        />
      )}

      {currentScreen === 5 && (
        <FamilyType
          familyType={familyType}
          onFamilyTypeSelect={setFamilyType}
          onNext={goToNext}
        />
      )}

      {currentScreen === 6 && (
        <DogSizeView
          dogSize={dogSize}
          onDogSizeSelect={setDogSize}
          onNext={goToNext}
        />
      )}

      {currentScreen === 7 && (
        <ActivityRate
          activityRate={activityRate}
          onActivityRateSelect={setActivityRate}
          onNext={goToNext}
        />
      )}

      {currentScreen === 8 && <ResultView />}
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  width: 554px;
  height: 668px;
  background-color: ${theme.color.white};
  border-radius: 30px;
  padding: 36px 40px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  justify-content: space-between;

  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  img {
    width: 32px;
    height: 32px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #929292;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Question = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: ${theme.color.black};
`;

const CloseButton = styled.button`
  border: none;
  background-color: ${theme.color.white};
  cursor: pointer;
`;

export default AiChatModal;
