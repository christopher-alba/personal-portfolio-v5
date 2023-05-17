import { FC, ReactElement, useContext, useState } from "react";
import {
  ArrowButton,
  ButtonsWrapper,
  CircleButton,
  IconButton,
  CloseIconSVG,
  ControlsDiv,
  ItemDiv,
  MainDiv,
  ModalBackdrop,
  ModalImage,
  FullscreenIconSVG,
} from "./styled";
import { ThemeContext } from "styled-components";

const CarouselImageModal: FC<{
  images: ReactElement[];
  parentIndex: number;
  setFullscreen: (bool: boolean) => void;
}> = ({ images, parentIndex, setFullscreen }) => {
  const [index, setIndex] = useState(parentIndex);
  const theme = useContext(ThemeContext);
  const slideRight = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const slideLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };
  const goToSlide = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <ModalBackdrop>
      <ModalImage src={images[index].props.src} />
      <ControlsDiv>
        <ButtonsWrapper>
          {images.map((_child, selectedIndex) => {
            return (
              <CircleButton
                key={selectedIndex}
                style={{
                  background:
                    selectedIndex === index
                      ? theme.colors.tertiary1
                      : theme.colors.primary3,
                }}
                onClick={() => {
                  goToSlide(selectedIndex);
                }}
              />
            );
          })}
        </ButtonsWrapper>
        <ButtonsWrapper>
          <ArrowButton onClick={slideLeft}>{"<"}</ArrowButton>
          <ArrowButton onClick={slideRight}>{">"}</ArrowButton>
        </ButtonsWrapper>
      </ControlsDiv>
      <IconButton
        onClick={() => {
          setFullscreen(false);
          (document.querySelector("body") as HTMLElement).style.overflow =
            "auto";
        }}
      >
        <CloseIconSVG />
      </IconButton>
    </ModalBackdrop>
  );
};

const Carousel: FC<{ children: ReactElement[] }> = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullScreen] = useState(false);
  const theme = useContext(ThemeContext);
  const slideRight = () => {
    if (index < children.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const slideLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(children.length - 1);
    }
  };
  const goToSlide = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {fullscreen && (
        <CarouselImageModal
          parentIndex={index}
          setFullscreen={setFullScreen}
          images={children}
        />
      )}
      <MainDiv>
        <ItemDiv>
          <IconButton
            onClick={() => {
              setFullScreen(true);
              (document.querySelector("body") as HTMLElement).style.overflow =
                "hidden";
            }}
          >
            <FullscreenIconSVG />
          </IconButton>
          {children[index]}
        </ItemDiv>
        <ControlsDiv>
          <ButtonsWrapper>
            {children.map((_child, selectedIndex) => {
              return (
                <CircleButton
                  key={selectedIndex}
                  style={{
                    background:
                      selectedIndex === index
                        ? theme.colors.tertiary1
                        : theme.colors.primary3,
                  }}
                  onClick={() => {
                    goToSlide(selectedIndex);
                  }}
                />
              );
            })}
          </ButtonsWrapper>
          <ButtonsWrapper>
            <ArrowButton onClick={slideLeft}>{"<"}</ArrowButton>
            <ArrowButton onClick={slideRight}>{">"}</ArrowButton>
          </ButtonsWrapper>
        </ControlsDiv>
      </MainDiv>
    </>
  );
};
export default Carousel;
