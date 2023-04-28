import { FC } from "react";
import styled from "styled-components";

const TitleWrapper = styled("div")`
  position: relative;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;
const TitleText = styled("h1")`
  margin-top: 150px;
  display: inline-block;
  font-size: 5rem;
  margin-bottom: 0;
  position: relative;
  color: ${({ theme }) => theme.colors.bold};
  font-family: "Inter", "Serif";
  z-index: 1;
  font-weight: 900;
  @media (max-width: 1300px) {
    margin-top: 50px;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;
const TitleNumber = styled("p")`
  position: absolute;
  top: 0;
  line-height: 20rem;
  font-size: 30rem;
  margin: 0;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.lowkey};
  @media (max-width: 1300px) {
    line-height: 10rem;
    font-size: 15rem;
  }
`;
const StyledHR = styled("hr")`
  width: 25%;
  border-width: 7px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.yellow1};
  margin: 0;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled("div")`
  position: relative;
  left: 100px;
  width: fit-content;
  @media (max-width: 600px) {
    left: unset;
  }
`;

const Title: FC<{ text: string; number: number }> = ({ text, number }) => {
  return (
    <TitleWrapper>
      <TitleNumber>#{number}</TitleNumber>
      <Wrapper>
        <TitleText>{text}</TitleText>
        <StyledHR />
      </Wrapper>
    </TitleWrapper>
  );
};

export default Title;
