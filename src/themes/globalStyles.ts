import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #root-wrapper{
    overflow-x:hidden;
  }
  body {
    background: ${({ theme }) => theme.colors.primary1};
    background-attachment: fixed;
    color: ${({ theme }) => theme.colors.secondary1} !important;
    font-family:  'Times New Roman', Times, serif;
    margin:0;
    &::-webkit-scrollbar-track
    {
      background-color: ${({ theme }) => theme.colors.primary1};
    }

    &::-webkit-scrollbar
    {
      width: 15px;
      background-color: ${({ theme }) => theme.colors.primary1};
    }
    &::-webkit-scrollbar-thumb
      {
          background-color: ${({ theme }) => theme.colors.secondary1};;
          border-radius:10px;
          border: 3px solid ${({ theme }) => theme.colors.primary1};
      }
  }
  button {
    font-family: 'Inter', sans-serif;
    text-transform: capitalize;
  }
`;
