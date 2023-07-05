import { addEventListeners } from "./eventListeners";
import { initializePositionTicks } from "./positions";
export let data: Uint8ClampedArray;
export let canvas: HTMLCanvasElement;

export let canMoveUp = true;
export let canMoveDown = true;
export let canMoveLeft = true;
export let canMoveRight = true;

export const setCanMoveUpFalse = () => {
  canMoveUp = false;
};

export const setCanMoveDownFalse = () => {
  canMoveDown = false;
};

export const setCanMoveLeftFalse = () => {
  canMoveLeft = false;
};

export const setCanMoveRightFalse = () => {
  canMoveRight = false;
};
export const setCanMoveUpTrue = () => {
  canMoveUp = true;
};

export const setCanMoveDownTrue = () => {
  canMoveDown = true;
};

export const setCanMoveLeftTrue = () => {
  canMoveLeft = true;
};

export const setCanMoveRightTrue = () => {
  canMoveRight = true;
};

export default () => {
  loadBoard();
  addEventListeners();
  initializePositionTicks();
};

export const loadBoard = (
  pacmanImg?: HTMLImageElement,
  ghostImgs?: HTMLImageElement[],
  ghostCount?: 10,
  foodImgs?: HTMLImageElement[],
  foodCount?: 100
) => {
  // MOUNT BOARD
  const img = new window.Image();
  img.crossOrigin = `Anonymous`;
  img.src = "./images/pacman/testing2.png";
  img.onload = function () {
    canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx: CanvasRenderingContext2D = canvas.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    ctx.drawImage(img, 0, 0);

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    data = imgData.data;

    //   MOUNT PACMAN
    const pacmanImageObject = new window.Image();
    pacmanImageObject.crossOrigin = `Anonymous`;
    pacmanImageObject.id = "Pacman";
    pacmanImageObject.style.position = "absolute";
    pacmanImageObject.style.width = "50px";
    pacmanImageObject.style.height = "50px";
    pacmanImageObject.style.bottom = "0px";
    pacmanImageObject.style.top = "0px";
    pacmanImageObject.style.left = "0px";
    pacmanImageObject.style.right = "0px";
    pacmanImageObject.style.transition = "200ms linear";

    pacmanImageObject.src = "./images/eda.png";
    (document.getElementById("arena") as HTMLElement).appendChild(
      pacmanImageObject
    );
  };
};
