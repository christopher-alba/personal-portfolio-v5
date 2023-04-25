import styled from "styled-components";

export const ButtonBrown4 = styled("button")`
  background: ${({ theme }) => theme.colors.brown4};
  color: ${({ theme }) => theme.colors.brown1};
  border: none;
  padding: 20px 50px;
  transition: 300ms;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.brown4Hover};
  }
`;
