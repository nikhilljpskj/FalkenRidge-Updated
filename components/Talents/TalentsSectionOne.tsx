import Image from "next/image";

const TalentsSectionOne = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-100 dark:bg-gray-900">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/talents/about-image-2.svg"
                alt="Talents Bootcamp Overview"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/talents/about-image-2-dark.svg"
                alt="Talents Bootcamp Overview"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Empowering Future Developers
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our 4-6 month intensive bootcamp is designed to transform talented individuals into industry-ready developers. With hands-on training and mentorship, we ensure a deep understanding of modern development practices.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Real-World Project Experience
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Unlike traditional courses, we integrate real-time projects from the start. Trainees will work on live applications, gaining firsthand experience in problem-solving, teamwork, and best coding practices.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  A Launchpad for Success
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  This program not only hones technical skills but also prepares participants for real-world challenges. By the end of the bootcamp, they will be ready to contribute to professional teams and kickstart successful careers in tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentsSectionOne;
