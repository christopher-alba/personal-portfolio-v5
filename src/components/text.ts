import styled from "styled-components";

export const Text = styled("p")`
  z-index: 3;
  position: relative;
  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }
`;

export const Emphasize = styled("span")`
  font-size: 2rem;
  font-weight: 900;
  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
`;
