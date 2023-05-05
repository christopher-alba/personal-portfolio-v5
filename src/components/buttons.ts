import styled from "styled-components";

export const TertiaryButton = styled("button")`
  background: ${({ theme }) => theme.colors.tertiary1};
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  color: ${({ theme }) => theme.colors.primary1};
  &:hover {
    background: ${({ theme }) => theme.colors.tertiary2};
  }
`;
