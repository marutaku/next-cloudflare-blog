import React from "react";
import StaticImage from "../_components/common/image";
import Description from "../_components/about/description";
import WorkExperiences from "../_components/about/work-experiences";
import { PastActivities } from "../_components/about/past-activities";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Description />

      <WorkExperiences />
      <PastActivities />
      <div className="mt-8">
        <h2 className="text-2xl font-bold">作ったもの</h2>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Social Links</h2>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com/marutaku"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/marutaku"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/marutaku"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
