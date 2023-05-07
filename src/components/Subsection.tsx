import { FC, ReactNode, useState } from "react";
import SubSectionTitle from "./SubSectionTitle";
import styled from "styled-components";
import { ReactComponent as DownIcon } from "../svg/icons/chevronDown.svg";

const InnerContentWrapper = styled("div")`
  border-bottom: solid 1px ${({ theme }) => theme.colors.secondary1};
`;
const TitleWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const DownIconSVG = styled(DownIcon)`
  transition: 300ms;
  width: 20px;
  height: auto;
`;
const ButtonDown = styled("button")`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.secondary1};
  &:hover,
  ${TitleWrapper}:hover & {
    color: ${({ theme }) => theme.colors.tertiary1};
  }
`;

const Subsection: FC<{
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  titleText: string;
  ContentNode: ReactNode;
  index: number;
  toggleSection: (index: number) => void;
  active: boolean;
}> = ({ Icon, titleText, ContentNode, active, index, toggleSection }) => {
  return (
    <InnerContentWrapper>
      <TitleWrapper
        onClick={() => {
          toggleSection(index);
        }}
      >
        <SubSectionTitle Icon={Icon} text={titleText} />
        <ButtonDown
          onClick={() => {
            toggleSection(index);
          }}
        >
          <DownIconSVG style={{ transform: active ? "rotate(180deg)" : "" }} />
        </ButtonDown>
      </TitleWrapper>
      {active && ContentNode}
    </InnerContentWrapper>
  );
};

export default Subsection;
