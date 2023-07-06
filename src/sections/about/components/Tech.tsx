import { FC, useContext } from "react";
import SubSectionTitle from "../../../components/SubSectionTitle";
import { TickTechSVG } from "../styled";
import styled, { ThemeContext } from "styled-components";
import { ReactComponent as GradIcon } from "../../../svg/icons/gradIcon.svg";
import { ReactComponent as MoneyIcon } from "../../../svg/icons/moneyIcon.svg";
import { ReactComponent as PracticalIcon } from "../../../svg/icons/practicalIcon.svg";
import {
  IntersectionArgs,
  animated,
  easings,
  useInView,
  useSpring,
} from "@react-spring/web";
import useViewportWidth from "../../../hooks/useViewportWidth";

type Technology = {
  name: string;
  rating: number;
  formalEducation: boolean;
  practicalExperience: boolean;
  paidExperience: boolean;
};

const technologies: Technology[] = [
  {
    name: "React",
    rating: 1,
    formalEducation: true,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Angular",
    rating: 0.7,
    formalEducation: false,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Vue",
    rating: 0.5,
    formalEducation: false,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Javascript",
    rating: 1,
    formalEducation: true,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Typescript",
    rating: 1,
    formalEducation: false,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "C#",
    rating: 0.7,
    formalEducation: false,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Java",
    rating: 0.7,
    formalEducation: true,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Cypress",
    rating: 0.8,
    formalEducation: false,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Playwright",
    rating: 0.8,
    formalEducation: false,
    practicalExperience: true,
    paidExperience: true,
  },
  {
    name: "Node.js + Express",
    rating: 0.8,
    formalEducation: true,
    practicalExperience: true,
    paidExperience: false,
  },
];
const MainTechWrapper = styled("div")`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary1};
  padding-bottom: 50px;
`;
const InnerContentWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  right: -20px;
`;
const GradIconSVG = styled(GradIcon)`
  height: 10px;
  width: auto;
  margin-right: 5px;
`;
const PracticalIconSVG = styled(PracticalIcon)`
  height: 10px;
  width: auto;
  margin-right: 5px;
`;
const MoneyIconSVG = styled(MoneyIcon)`
  height: 10px;
  width: auto;
  margin-right: 5px;
`;

const InfoWrapper = styled("div")`
  margin-bottom: 50px;
`;
const InfoInner = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  justify-content: flex-end;
`;
const InfoText = styled("p")`
  margin: 0;
  text-align: right;
  margin-right: 10px;
`;
const Tech: FC = () => {
  return (
    <MainTechWrapper>
      <SubSectionTitle
        Icon={TickTechSVG}
        text="Technologies I’m Familiar With"
      />
      <InfoWrapper>
        <InfoInner>
          <InfoText>Formal Education</InfoText>
          <GradIconSVG />
        </InfoInner>
        <InfoInner>
          <InfoText>Practical Experience</InfoText>
          <PracticalIconSVG />
        </InfoInner>
        <InfoInner>
          <InfoText>Paid Experience</InfoText>
          <MoneyIconSVG />
        </InfoInner>
        <InfoInner>
          <InfoText>Familiarity rating</InfoText>
          <InfoText style={{ margin: 0 }}>
            <strong>0.0 to 1.0</strong>
          </InfoText>
        </InfoInner>
      </InfoWrapper>
      <InnerContentWrapper>
        {technologies
          .sort((a, b) => (a.rating > b.rating ? -1 : 1))
          .map((technology, index) => {
            return (
              <TechBar
                key={index}
                name={technology.name}
                rating={technology.rating}
                formalEducation={technology.formalEducation}
                practicalExperience={technology.practicalExperience}
                paidExperience={technology.paidExperience}
              />
            );
          })}
      </InnerContentWrapper>
    </MainTechWrapper>
  );
};

export default Tech;

const MainWrapper = styled("div")`
  display: flex;
  margin-bottom: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const BarWrapper = styled("div")`
  position: relative;
  width: 80%;
`;
const BarTextWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const BarText = styled("p")`
  margin: 0;
`;
const IconsWrapper = styled("div")`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: 3%;
  padding-bottom: 3px;
`;
const BarDivOuter = styled("div")`
  background: ${({ theme }) => theme.colors.primary3};
  width: 100%;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: left;
`;
const BarDivInner = styled("div")`
  background: ${({ theme }) => theme.colors.tertiary1};
  height: 7.5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  position: absolute;
`;

const TechBar: FC<Technology> = ({
  name,
  rating,
  formalEducation,
  practicalExperience,
  paidExperience,
}) => {
  const [ref, isInView] = useInView({
    threshold: 0.3,
  } as IntersectionArgs);
  const width = useViewportWidth();
  const spring = useSpring({
    opacity: isInView ? 1 : 0,
    width: isInView ? `${rating * 102.5}%` : "0%",
    config: {
      duration: 1000,
      easing: easings.easeInOutQuad,
    },
  });
  const theme = useContext(ThemeContext);
  return (
    <MainWrapper>
      <BarWrapper>
        <BarTextWrapper>
          <BarText>{name}</BarText>
          <BarText>{rating.toFixed(1)}</BarText>
        </BarTextWrapper>
        <BarDivOuter>
          <BarDivInner
            ref={ref}
            as={animated.div}
            style={{
              left: "-1.25%",
              opacity: width > 600 ? spring.opacity : 1,
              width: width > 600 ? spring.width : `${rating * 102.5}%`,
            }}
          />
        </BarDivOuter>
      </BarWrapper>
      <IconsWrapper>
        <GradIconSVG
          style={{
            color: formalEducation
              ? theme.colors.tertiary1
              : theme.colors.primary3,
          }}
        />
        <PracticalIconSVG
          style={{
            color: practicalExperience
              ? theme.colors.tertiary1
              : theme.colors.primary3,
          }}
        />
        <MoneyIconSVG
          style={{
            color: paidExperience
              ? theme.colors.tertiary1
              : theme.colors.primary3,
          }}
        />
      </IconsWrapper>
    </MainWrapper>
  );
};
