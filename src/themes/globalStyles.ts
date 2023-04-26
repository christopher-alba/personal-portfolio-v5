import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #root-wrapper{
    overflow-x:hidden;
  }
  body {
    background: ${({ theme }) => theme.colors.brown1};
    background-attachment: fixed;
    color: ${({ theme }) => theme.colors.brown4} !important;
    font-family:  'Times New Roman', Times, serif;
    margin:0;
    &::-webkit-scrollbar-track
    {
      background-color: ${({ theme }) => theme.colors.brown1};
    }

    &::-webkit-scrollbar
    {
      width: 15px;
      background-color: ${({ theme }) => theme.colors.brown1};
    }
    &::-webkit-scrollbar-thumb
      {
          background-color: ${({ theme }) => theme.colors.brown4};;
          border-radius:10px;
          border: 3px solid ${({ theme }) => theme.colors.brown1};
      }
  }
  button {
    font-family: 'Inter', sans-serif;
    text-transform: capitalize;
  }
`;
