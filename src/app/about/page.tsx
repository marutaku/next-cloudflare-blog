import React from "react";
import Description from "../_components/about/description";
import WorkExperiences from "../_components/about/work-experiences";
import { PastActivities } from "../_components/about/past-activities";
import MyWorks from "../_components/about/my-works";
import { BLOG_NAME } from "@/utils/constants";

export async function generateMetadata() {
  return {
    title: '"marutaku"について',
    description: "このブログの著者についての説明",
    openGraph: {
      title: '"marutaku"について',
      url: `/about`,
      siteName: BLOG_NAME,
      type: "website",
    },
  };
}

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-screen-md mx-auto p-4 leading-relaxed">
      <Description />
      <WorkExperiences />
      <PastActivities />
      <MyWorks />
    </div>
  );
};

export default AboutPage;
