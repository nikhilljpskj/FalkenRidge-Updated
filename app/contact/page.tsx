import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Have a question or a project in mind? Let's connect! Reach out to us, and we’ll get back to you as soon as possible."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
