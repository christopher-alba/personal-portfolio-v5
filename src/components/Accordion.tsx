import { FC, useState, ReactElement } from "react";
import Subsection from "./Subsection";

const Accordion: FC<{
  sections: {
    titleText: string;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    Content: ReactElement;
  }[];
}> = ({ sections }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(-1);

  const toggleSection = (sectionIndex: number) => {
    setActiveSectionIndex(
      activeSectionIndex === sectionIndex ? -1 : sectionIndex
    );
  };

  return (
    <>
      {sections.map((section, index: number) => (
        <div key={index}>
          <Subsection
            index={index}
            toggleSection={toggleSection}
            active={index === activeSectionIndex}
            titleText={section.titleText}
            Icon={section.Icon}
            ContentNode={section.Content}
          />
        </div>
      ))}
    </>
  );
};

export default Accordion;
