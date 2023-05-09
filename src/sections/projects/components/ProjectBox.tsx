import { FC } from "react";
import styled from "styled-components";
import { Project } from "../data";

export const MainWrapper = styled("div")`
  aspect-ratio: 1;
  position: relative;
  width: 25%;
  box-sizing: border-box;
  border-top: 2px solid ${({ theme }) => theme.colors.primary3};
  border-right: 2px solid ${({ theme }) => theme.colors.primary3};
  height: auto;
  background: ${({ theme }) => theme.colors.primary1};
  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const OverlayWrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  transition: 500ms;
  left: 0;
  align-items: center;
  justify-content: center;
  color: black;
  background: ${({ theme }) => theme.colors.tertiary2 + "F7"};
  &:hover {
    opacity: 0;
  }
`;

export const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ProjectBox: FC<{ project: Project }> = ({ project }) => {
  return (
    <MainWrapper>
      <a
        href={project.website || project.download}
        target="_blank"
        rel="noopener noreferrer"
      >
        <OverlayWrapper>
          <p>{project.name}</p>
        </OverlayWrapper>
      </a>
      <Image src={project.imgSrc} />
    </MainWrapper>
  );
};

export default ProjectBox;
