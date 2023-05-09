import styled from "styled-components";

export const BackgroundDiv = styled("div")`
  background: ${({ theme }) => theme.colors.primary3};
  min-height: 50vh;
  padding-top: 100px;
`;

export const ProjectsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledAnchor = styled("a")`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.secondary1};
`;
