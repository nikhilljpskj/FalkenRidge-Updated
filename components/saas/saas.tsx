import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SaasIntro from "@/components/saasIntro/saasIntro";


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const OperonXSection = () => {
  const List = ({ text }) => (
    <p className="mb-4 flex items-center text-base font-medium text-body-color">
      <span className="mr-3 flex h-[26px] w-[26px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
    <SaasIntro />
    <section id="operonx" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Text Section */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Introducing OperonX"
                paragraph="A powerful ERP, CRM, and Integration platform designed to simplify and automate business operations."
                mb="32px"
              />

              <div className="mb-6 max-w-[570px]">
                <List text="Manage sales, inventory, and finances effortlessly" />
                <List text="Automate workflows with smart integrations" />
                <List text="Enhance customer relationships with CRM tools" />
              </div>

              <Link
                href=" #"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-white transition hover:bg-opacity-90 mb-8 lg:mb-0"
              >
                Explore OperonX
              </Link>
            </div>

            {/* Full-Width Image Section */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Link
                href=" #"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-white transition hover:bg-opacity-90"
              >
                <Image
                  src="/images/saas/operonx-web.png"
                  alt="OperonX Platform"
                  fill
                  className="object-cover object-center"
                />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default OperonXSection;
