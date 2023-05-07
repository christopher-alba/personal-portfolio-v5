import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../svg/icons/xmark-solid.svg";
import { ReactComponent as FullscreenIcon } from "../../svg/icons/fullscreen.svg";

interface MainDivProps {
  width?: string;
  height?: string;
}
export const MainDiv = styled("div")<MainDivProps>`
  width: ${({ width }) => width || "100%"};
  position: relative;
  height: ${({ height }) => height || "300px"};
  @media (max-width: 600px) {
    height: 200px;
  }
`;

export const ItemDiv = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ControlsDiv = styled("div")`
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.primary4};
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ArrowButton = styled("button")`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary1};
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary1};
  }
`;
export const ButtonsWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CircleButton = styled("button")`
  cursor: pointer;
  height: 5px;
  width: 20px;
  border: none;
  margin: 5px;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiary2} !important;
  }
`;

export const CarouselImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ModalBackdrop = styled("div")`
  background: black;
  width: 100%;
  height: 100%;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const ModalImage = styled("img")`
  width: auto;
  margin: 0 auto;
  height: 80%;
  object-fit: cover;
`;

export const IconButton = styled("button")`
  padding: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const FullscreenIconSVG = styled(FullscreenIcon)`
  ${IconButton}:hover & {
    color: ${({ theme }) => theme.colors.tertiary1};
  }
  width: 25px;
  height: auto;
  color: white;
`;

export const CloseIconSVG = styled(CloseIcon)`
  ${IconButton}:hover & {
    color: ${({ theme }) => theme.colors.tertiary1};
  }
  width: 25px;
  height: auto;
  color: white;
`;
