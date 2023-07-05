import {
  canMoveDown,
  canMoveUp,
  canMoveLeft,
  canMoveRight,
  setCanMoveDownFalse,
  setCanMoveLeftFalse,
  setCanMoveRightFalse,
  setCanMoveUpFalse,
  canvas,
  data,
  setCanMoveUpTrue,
  setCanMoveDownTrue,
  setCanMoveLeftTrue,
  setCanMoveRightTrue,
} from "./main";
import { positionPacman } from "./positions";
export const addEventListeners = () => {
  addKeydownListener();
};

const keydownHandler = (ev: KeyboardEvent) => {
  console.log(ev);

  //as the mouse moves around the image
  const cols = canvas.width;
  const {
    left: pacmanLeft,
    top: pacmanTop,
    right: pacmanRight,
    bottom: pacmanBottom,
  } = positionPacman;
  // Get the dimensions of the pacman
  const pacmanImg = document.getElementById("Pacman") as HTMLElement;
  const pacmanHeight = pacmanImg.getBoundingClientRect().height;
  const pacmanWidth = pacmanImg.getBoundingClientRect().width;
  // Add pixels of interest into an array
  type PixelData = {
    top: number;
    left: number;
  };
  let directionOfMovement = "none";
  const pixelsOfInterest: PixelData[] = [];
  console.log(data);
  switch (ev.key) {
    case "ArrowUp" || "w":
      directionOfMovement = "up";
      for (let i = pacmanLeft; i < pacmanLeft + pacmanWidth; i++) {
        pixelsOfInterest.push({
          top: pacmanTop - 1,
          left: i,
        });
      }
      break;
    case "ArrowDown" || "s":
      directionOfMovement = "down";
      for (let i = pacmanLeft; i < pacmanLeft + pacmanWidth; i++) {
        pixelsOfInterest.push({
          top: pacmanBottom + 1,
          left: i,
        });
      }
      break;
    case "ArrowLeft" || "a":
      directionOfMovement = "left";
      for (let i = pacmanTop; i < pacmanTop + pacmanHeight; i++) {
        pixelsOfInterest.push({
          top: i,
          left: pacmanLeft - 1,
        });
      }
      break;
    case "ArrowRight" || "d":
      directionOfMovement = "right";
      for (let i = pacmanTop; i < pacmanTop + pacmanHeight; i++) {
        pixelsOfInterest.push({
          top: i,
          left: pacmanRight + 1,
        });
      }
      break;
  }
  // For each pixel of interest, get the color
  const pixelsDataComplete = pixelsOfInterest.map((pixel) => {
    return {
      top: pixel.top,
      left: pixel.left,
      color: extractPixelColor(cols, pixel.left, pixel.top),
    };
  });
  console.log(pixelsDataComplete);

  let headingToWall = false;
  for (let i = 0; i < pixelsDataComplete.length; i++) {
    const pixelData = pixelsDataComplete[i];
    const colour = `rgb(${pixelData.color.red}, ${pixelData.color.green}, ${pixelData.color.blue})`;
    if (colour === "rgb(0,0,0)") {
      headingToWall = true;
    }
  }

  if (headingToWall) {
    switch (ev.key) {
      case "ArrowUp":
        setCanMoveUpFalse();
        break;
      case "ArrowDown":
        setCanMoveDownFalse();
        break;
      case "ArrowLeft":
        setCanMoveLeftFalse();
        break;
      case "ArrowRight":
        setCanMoveRightFalse();
        break;
    }
  }
  const pacmanElement = document.getElementById("Pacman") as HTMLElement;
  const velocity = 50;
  if (canMoveUp && directionOfMovement === "up") {
    setCanMoveUpFalse();
    pacmanElement.style.top =
      parseInt(pacmanElement.style.top.split("px")[0]) - velocity + "px";
    setTimeout(() => {
      setCanMoveUpTrue();
    }, 100);
  }
  if (canMoveDown && directionOfMovement === "down") {
    setCanMoveDownFalse();
    pacmanElement.style.top =
      parseInt(pacmanElement.style.top.split("px")[0]) + velocity + "px";
    setTimeout(() => {
      setCanMoveDownTrue();
    }, 100);
  }
  if (canMoveLeft && directionOfMovement === "left") {
    setCanMoveLeftFalse();
    pacmanElement.style.left =
      parseInt(pacmanElement.style.left.split("px")[0]) - velocity + "px";
    setTimeout(() => {
      setCanMoveLeftTrue();
    }, 100);
  }
  if (canMoveRight && directionOfMovement === "right") {
    setCanMoveRightFalse();
    pacmanElement.style.left =
      parseInt(pacmanElement.style.left.split("px")[0]) + velocity + "px";
    setTimeout(() => {
      setCanMoveRightTrue();
    }, 100);
  }
};
const addKeydownListener = () => {
  window.addEventListener("keydown", keydownHandler);
};

//cols: Width of the image representing total number of columns
//x: Row position of this pixel
//y: Column position of this pixel
const extractPixelColor = (cols: number, x: number, y: number) => {
  //To get the exact pixel, the logic is to multiply total columns in this image with the row position of this pixel and then add the column position of this pixed
  const pixel = cols * x + y;
  //To get the array position in the entire image data array, simply multiply your pixel position by 4 (since each pixel will have its own r,g,b,a in that order)
  const position = pixel * 4;
  //the rgba value of current pixel will be the following
  return {
    red: data[position],
    green: data[position + 1],
    blue: data[position + 2],
    alpha: data[position + 3],
  };
};
