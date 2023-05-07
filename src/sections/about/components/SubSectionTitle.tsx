import styled from "styled-components";
import { FC } from "react";
const WrapperMain = styled("div")`
  display: flex;
`;
const Title = styled("h3")`
  font-weight: 200;
`;
const SubSectionTitle: FC<{
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}> = ({ Icon, text }) => {
  return (
    <WrapperMain>
      <Icon />
      <Title>{text}</Title>
    </WrapperMain>
  );
};

export default SubSectionTitle;
