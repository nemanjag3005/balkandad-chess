import { type Metadata } from "next/types";
import Creator from "~/components/CourseInfo/Creator";
import ExpandedTestimonials from "~/components/CourseInfo/ExpandedTestimonials";
import Lectures from "~/components/CourseInfo/Lectures";
import Pricing from "~/components/CourseInfo/Pricing";
import Resources from "~/components/CourseInfo/Resources";
import Section from "~/components/CourseInfo/Section";
import SectionsNav from "~/components/CourseInfo/SectionsNav";
import TableOfContents from "~/components/CourseInfo/TableOfContents";
import Testimonial1 from "~/components/CourseInfo/Testimonial1";
import Testimonial2 from "~/components/CourseInfo/Testimonial2";
import Testimonials from "~/components/CourseInfo/Testimonials";
import { ActiveSectionProvider } from "~/utils/context/ActiveSectionContext";

export const metadata: Metadata = {
  title: `BalkanDad Chess | My Course`,
};

export default async function Course() {
  return (
    <ActiveSectionProvider>
      <Pricing />
      <Testimonials />
      <SectionsNav />
      <Section id="contents">
        <TableOfContents />
      </Section>
      <Testimonial1 />
      <Section id="lectures">
        <Lectures />
      </Section>
      <Testimonial2 />
      <Section id="resources">
        <Resources />
      </Section>
      <ExpandedTestimonials />
      <Section id="coach">
        <Creator />
      </Section>
    </ActiveSectionProvider>
  );
}
