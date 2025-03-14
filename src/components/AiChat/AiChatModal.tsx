import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style";
import {
  WelcomeView,
  JobView,
  HomeView,
  HouseOwnershipView,
  PersonalityView,
  FamilyTypeView,
  DogSizeView,
  ActivityRateView,
  ResultView,
} from "./Views";
import { cross_img } from "../../assets";
import { useOverlay } from "../../context/OverlayContext";
import axios from "axios";

interface BreedResult {
  breed: string;
  reason: string;
}

export const AiChatModal = () => {
  const { closeModal } = useOverlay();
  const [currentScreen, setCurrentScreen] = useState(0);
  const [result, setResult] = useState<BreedResult | null>(null);

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

  const onSeeResult = async () => {
    const body = {
      job,
      home,
      ownership,
      personality,
      family_type: familyType,
      dog_size: dogSize,
      activity_rate: activityRate,
    };

    try {
      const response = await axios.post<BreedResult>(
        "https://aspis-ai-api.ncloud.sbs/v1/suggest/breed",
        body
      );

      setResult(response.data);
      setCurrentScreen(8);
    } catch (error) {
      console.error(error);
    }
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
    },
  ];

  return (
    <ChatContainer>
      <TopContainer>
        <Title>
          <Question>{screenTitles[currentScreen].title}</Question>
          <p>{screenTitles[currentScreen].subtitle}</p>
        </Title>
        <CloseButton onClick={closeModal}>
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
        <HouseOwnershipView
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
        <FamilyTypeView
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
        <ActivityRateView
          activityRate={activityRate}
          onActivityRateSelect={setActivityRate}
          onSeeResult={onSeeResult}
        />
      )}

      {currentScreen === 8 && result && (
        <ResultView breed={result.breed} reason={result.reason} />
      )}
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
