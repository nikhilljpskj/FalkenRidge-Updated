import SectionTitle from "../Common/SectionTitle";

const SaaSIntroSection = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="text-center mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            Powering the Future with Smarter SaaS
          </h2>
          <p className="text-lg leading-relaxed text-body-color dark:text-white/80">
            At <span className="text-primary font-semibold">FalkenRidge</span>, we craft modern, intelligent SaaS tools that help businesses run faster, smarter, and leaner. Whether it's automating operations, streamlining workflows, or unlocking data-driven insights — our solutions are built to scale with your ambition. OperonX is just the beginning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaaSIntroSection;
