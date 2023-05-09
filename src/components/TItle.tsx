import { FC } from "react";
import styled from "styled-components";

const StyledHeading = styled("h1")`
  color: ${({ theme }) => theme.colors.secondary1};
  font-size: 1.5rem;
  margin: 0;
`;

const StyledHR = styled("hr")`
  border-style: solid;
  border-width: 3px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0;
  border-color: ${({ theme }) => theme.colors.tertiary1};
`;

const Title: FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <StyledHeading>{text}</StyledHeading>
      <StyledHR />
    </>
  );
};

export default Title;
