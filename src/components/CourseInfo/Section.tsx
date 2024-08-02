"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "~/utils/context/ActiveSectionContext";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
    console.log(id);
  }, [inView, id, setActiveSection]);

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
};

export default Section;
