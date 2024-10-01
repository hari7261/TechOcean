/* eslint-disable react/display-name */
"use client";
import {
  title,
  subtitle,
  titleWrapper,
  sectionWrapper,
} from "@/components/primitives";
// import { FeaturesGrid } from "@/components/features-grid";
// import landingContent from "@/content/landing";

export const LastButNotLeast = () => {
  return (
    <section className={sectionWrapper({ class: "mt-16 lg:mt-4" })}>
      <div className="flex flex-col gap-0 md:gap-8">
        <div>
          <div className={titleWrapper({ class: "items-center" })}>
            <div>
              <h1 className={title({ size: "lg" })}>Must Try&nbsp;</h1>
              <h1 className={title({ color: "yellow", size: "lg" })}>TechOcean</h1>
            </div>
            <div>
              <h1 className={title({ size: "lg" })}>It's Your hub for&nbsp;</h1>
              <h1 className={title({ size: "lg", color: "pink" })}>Open Source.</h1>
            </div>
          </div>
          <p
            className={subtitle({
              class:
                "mt-4 md:w-full text-center flex justify-center items-center",
            })}
          >
            Dive into a wealth of open-source resources, tools, and projects to enhance your development journey.
          </p>
        </div>
        {/* <FeaturesGrid features={landingContent.fullFeatures} /> */}
      </div>
    </section>
  );
};
