import styled from "styled-components";

interface DogProps {
  name: string;
  gender: string;
  size: string;
  age: number;
  imageUrl: string;
}

const NTCCard = ({ name, gender, size, age, imageUrl }: DogProps) => {
  return (
    <Card>
      <ImageWrapper>
        <DogImage src={imageUrl} alt="" />
      </ImageWrapper>

      <CardContent>
        <Name>
          {name} <Subtext>{gender}</Subtext>
        </Name>
        <TextBox>
          <Info>
            <BoldText>크기</BoldText>
            <RegularText>{size}</RegularText>
          </Info>
          <Info>
            <BoldText>나이</BoldText> {age}세
          </Info>
        </TextBox>
      </CardContent>
    </Card>
  );
};

const Card = styled.div`
  width: 250px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;
const DogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
const Subtext = styled.span`
  font-size: 16px;
  color: #9f9f9f;
  margin-left: 5px;
  font-weight: 500;
`;
const Info = styled.div`
  font-size: 16px;
  text-align: left;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const BoldText = styled.span`
  font-weight: 600;
`;
const RegularText = styled.span`
  font-weight: 400;
`;

export default NTCCard;
