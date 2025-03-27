"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Choose a flexible learning plan that fits your needs. Our structured pricing ensures affordability while providing maximum value."
          center
          width="665px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              One-Time Payment
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="2 Months"
            price={isMonthly ? "5,000" : "10,000"}
            duration={isMonthly ? "M" : "T"}
            subtitle="Ideal for those looking for a quick but comprehensive learning experience."
          >
            <OfferList text="Access to all course materials" status="active" />
            <OfferList text="Live mentoring sessions" status="active" />
            <OfferList text="Certificate of Completion" status="active" />
            <OfferList text="Community Access" status="active" />
          </PricingBox>
          <PricingBox
            packageName="4 Months"
            price={isMonthly ? "5,000" : "15,000"}
            duration={isMonthly ? "M" : "T"}
            subtitle="Balanced learning duration for deeper understanding and practice."
          >
            <OfferList text="Everything in 2 Months Plan" status="active" />
            <OfferList text="Advanced assignments & projects" status="active" />
            <OfferList text="Personalized feedback" status="active" />
            <OfferList text="Extended mentoring sessions" status="active" />
          </PricingBox>
          <PricingBox
            packageName="6 Months (Best Value)"
            price={isMonthly ? "5,000" : "25,000"}
            duration={isMonthly ? "M" : "T"}
            subtitle="Comprehensive learning experience with in-depth mentorship."
          >
            <OfferList text="Everything in 4 Months Plan" status="active" />
            <OfferList text="Industry-level projects" status="active" />
            <OfferList text="One-on-one career guidance" status="active" />
            <OfferList text="Priority support & job assistance" status="active" />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
