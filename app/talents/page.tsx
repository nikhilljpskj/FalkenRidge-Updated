import Breadcrumb from "@/components/Common/Breadcrumb";
import TalentsSectionOne from "@/components/Talents/TalentsSectionOne";
import TalentsSectionTwo from "@/components/Talents/TalentsSectionTwo";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talents | Bootcamp for Future Developers",
  description: "Join our intensive 4-6 month bootcamp designed to turn aspiring developers into industry-ready professionals with real-time project experience.",
};

const TalentsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Talents"
        description="Our 4-6 month intensive bootcamp is tailored for aspiring developers. Gain hands-on experience with real-time projects, industry mentorship, and a structured learning path designed to transform talent into expertise."
      />
      <TalentsSectionOne />
      <TalentsSectionTwo />
      <Pricing />
    </>
  );
};

export default TalentsPage;
