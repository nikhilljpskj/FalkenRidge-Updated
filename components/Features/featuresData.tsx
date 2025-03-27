import { Feature } from "@/types/feature";
import { 
  CodeBracketIcon, 
  CloudIcon, 
  LightBulbIcon, 
  DocumentTextIcon, 
  CubeIcon, 
  ShieldCheckIcon 
} from "@heroicons/react/24/outline";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <CodeBracketIcon className="h-10 w-10 text-blue-500" />,
    title: "Software Development",
    paragraph: "Custom software solutions crafted to streamline your business operations and enhance productivity. Tailored for your unique needs, ensuring innovation and efficiency."
  },
  {
    id: 2,
    icon: <CloudIcon className="h-10 w-10 text-blue-500" />,
    title: "Cloud Solutions",
    paragraph: "Scalable and secure cloud infrastructure to support your growing business. Optimize workflows, enhance collaboration, and ensure seamless data accessibility."
  },
  {
    id: 3,
    icon: <LightBulbIcon className="h-10 w-10 text-blue-500" />,
    title: "Consulting",
    paragraph: "Expert guidance to align your technology strategy with business goals. We provide data-driven insights and actionable roadmaps for sustainable growth."
  },
  {
    id: 4,
    icon: <DocumentTextIcon className="h-10 w-10 text-blue-500" />,
    title: "Portfolio Development",
    paragraph: "Showcase your skills, projects, and achievements with professionally crafted digital portfolios designed to make a lasting impression."
  },
  {
    id: 5,
    icon: <CubeIcon className="h-10 w-10 text-blue-500" />,
    title: "Product Design",
    paragraph: "End-to-end product design services, from concept to execution. Includes branding, UI/UX, and visual storytelling for a captivating digital experience."
  },
  {
    id: 6,
    icon: <ShieldCheckIcon className="h-10 w-10 text-blue-500" />,
    title: "Cybersecurity",
    paragraph: "Protect your business from digital threats with our advanced cybersecurity solutions. Secure networks, safeguard data, and ensure compliance with industry standards."
  }
];

export default featuresData;
