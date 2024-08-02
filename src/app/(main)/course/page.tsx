import Creator from "~/components/CourseInfo/Creator";
import ExpandedTestimonials from "~/components/CourseInfo/ExpandedTestimonials";
import Lectures from "~/components/CourseInfo/Lectures";
import Pricing from "~/components/CourseInfo/Pricing";
import Resources from "~/components/CourseInfo/Resources";
import SectionsNav from "~/components/CourseInfo/SectionsNav";
import TableOfContents from "~/components/CourseInfo/TableOfContents";
import Testimonial1 from "~/components/CourseInfo/Testimonial1";
import Testimonial2 from "~/components/CourseInfo/Testimonial2";
import Testimonials from "~/components/CourseInfo/Testimonials";

export default async function Course() {
  return (
    <>
      <Pricing />
      <Testimonials />
      <SectionsNav />
      <TableOfContents />
      <Testimonial1 />
      <Lectures />
      <Testimonial2 />
      <Resources />
      <ExpandedTestimonials />
      <Creator />
    </>
  );
}
