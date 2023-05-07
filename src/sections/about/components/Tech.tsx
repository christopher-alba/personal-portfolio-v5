import { FC } from "react";
import SubSectionTitle from "../../../components/SubSectionTitle";
import {
  GradIconStyled,
  InnerContentWrapper,
  TextWrapper,
  TickTechSVG,
} from "../styled";

const Tech: FC = () => {
  return (
    <>
      <SubSectionTitle
        Icon={TickTechSVG}
        text="Technologies I’m Familiar With"
      />
      <InnerContentWrapper></InnerContentWrapper>
    </>
  );
};

export default Tech;
