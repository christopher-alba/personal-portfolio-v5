export const positionPacman = {
  top: 100, //relative to top of screen
  left: 100, //relative to left of screen
  right: 100, //relative to left of screen
  bottom: 100, //relative to top of screen
};

export const initializePositionTicks = () => {
  initializePacmanTicks();
};

let pacmanInterval: number | undefined = undefined;

const initializePacmanTicks = () => {
  pacmanInterval = setInterval(() => {
    const rects = document.getElementById("Pacman")?.getBoundingClientRect();
    positionPacman.top = rects?.top ?? 0;
    positionPacman.bottom = (rects?.top ?? 0) + (rects?.height ?? 0);
    positionPacman.left = rects?.left ?? 0;
    positionPacman.right = (rects?.left ?? 0) + (rects?.width ?? 0);
  }, 100);
};

export const clearPositionTicks = () => {
  clearInterval(pacmanInterval);
};
