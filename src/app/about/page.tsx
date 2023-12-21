import React from "react";
import Description from "../_components/about/description";
import WorkExperiences from "../_components/about/work-experiences";
import { PastActivities } from "../_components/about/past-activities";
import MyWorks from "../_components/about/my-works";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <Description />
      <WorkExperiences />
      <PastActivities />
      <MyWorks />
    </div>
  );
};

export default AboutPage;
