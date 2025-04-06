import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto px-6 py-12 min-h-screen mt-14">
      <div className="max-w-5xl mx-auto p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{"Terms and Conditions"}</h1>
        <p className="text-sm mb-6">{"Last updated: [Insert Date]"}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{"1. Introduction"}</h2>
        <p className="mb-4 leading-relaxed">
          {"Welcome to FalkenRidge. This Terms and Conditions agreement (\"Agreement\") governs your use of our website, SaaS products, web development, software development, and cloud-based solutions (collectively, the \"Services\"). By accessing or using our Services, you agree to be bound by this Agreement. If you do not agree with any part of these Terms, please do not use our Services."}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{"2. Company Information"}</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>{"Company Name:"}</strong>{" FalkenRidge"}</li>
          <li><strong>{"Business Structure:"}</strong>{" Startup"}</li>
          <li><strong>{"Registered Address:"}</strong>{" Thiruvananthapuram, Kerala, India"}</li>
          <li><strong>{"Contact:"}</strong>{" info@falkenridge.com"}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{"3. Scope of Services"}</h2>
        <p className="mb-4 leading-relaxed">
          {"FalkenRidge offers a range of digital solutions including SaaS products, web development, software development, and cloud-based solutions. One of our flagship SaaS products is OperonX, which provides:"}
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>{"ERP Solutions:"}</strong>{" Comprehensive Enterprise Resource Planning to manage sales, finance, inventory, and operations efficiently."}</li>
          <li><strong>{"CRM Solutions:"}</strong>{" Tools to enhance customer relationships through seamless communication, tracking, and engagement."}</li>
          <li><strong>{"Workflow Automation:"}</strong>{" A no-code workflow engine to reduce manual tasks and boost productivity."}</li>
          <li><strong>{"App Integrations:"}</strong>{" Real-time data synchronization between your favorite applications."}</li>
          <li><strong>{"Business Analytics:"}</strong>{" Real-time reports, dashboards, and predictive insights tailored to your business needs."}</li>
          <li><strong>{"Scalability & Security:"}</strong>{" Enterprise-grade security and scalability, ensuring data protection and support for business growth."}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{"4. User Account and Subscription"}</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>{"Account Creation:"}</strong>{" Users may be required to create an account to access our SaaS products. All information provided during registration must be accurate and up-to-date."}</li>
          <li><strong>{"Subscription Limits:"}</strong>{" Each subscription plan for OperonX allows a maximum of 20 user accounts. Additional user accounts beyond this limit will incur an extra fee per user."}</li>
          <li><strong>{"Subscription Terms:"}</strong>{" Subscriptions may be offered on a monthly, yearly, or custom basis as per the client’s requirements. Pricing and billing cycles will be clearly stated at the time of subscription."}</li>
          <li><strong>{"Refund Policy:"}</strong>{" Refunds are subject to usage conditions and are granted at the discretion of FalkenRidge. In cases where usage conditions are not met, refunds may be limited or denied."}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{"5. Intellectual Property"}</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>{"Ownership:"}</strong>{" All SaaS products, software, and digital tools developed by FalkenRidge for our own management remain the sole property of FalkenRidge."}</li>
          <li><strong>{"Customer Projects:"}</strong>{" For projects commissioned by customers, unless otherwise stated in the contract, the customer retains full ownership of their delivered product. This is subject to the terms and fulfillment of the underlying agreement."}</li>
          <li><strong>{"License:"}</strong>{" Customers are granted a limited, non-transferable license to use the delivered products in accordance with the terms of their subscription or project agreement."}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{"6. Data Usage and Privacy"}</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>{"Data Collection:"}</strong>{" We collect and use customer data based on the functionality of our applications. This may include personal data, usage data, and technical data. Further details are available in our Privacy Policy."}</li>
          <li><strong>{"Data Usage:"}</strong>{" The data collected is used to improve service functionality, provide support, and deliver personalized experiences. We commit to handling customer data responsibly and securely."}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{"7. Service Level Agreement (SLA) and Liability"}</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>{"SLA:"}</strong>{" FalkenRidge strives to maintain high service uptime and performance standards. In the event of SLA breaches, liability will be as stipulated in the individual contract with the customer."}</li>
          <li><strong>{"Limitation of Liability:"}</strong>{" Except as provided by applicable law, FalkenRidge shall not be liable for any indirect, incidental, or consequential damages arising out of or in connection with the use of our Services."}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{"8. Termination"}</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>{"Termination by Customer:"}</strong>{" Customers may terminate their account or subscription subject to any outstanding fees and in accordance with the notice period specified in the service agreement."}</li>
          <li>
            <strong>{"Termination by FalkenRidge:"}</strong>{" We reserve the right to terminate or suspend your account if:"}
            <ul className="list-disc list-inside ml-4">
              <li>{"There is a disruption in payment."}</li>
              <li>{"You violate any usage-related terms or conditions."}</li>
              <li>{"There is any activity deemed harmful to our services or other users."}</li>
            </ul>
          </li>
          <li><strong>{"Effects of Termination:"}</strong>{" Upon termination, access to your account and data may be limited or terminated. Customers are responsible for exporting their data prior to termination if needed."}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{"9. Amendments and Updates"}</h2>
        <p className="mb-4 leading-relaxed">
          {"FalkenRidge reserves the right to update or modify these Terms and Conditions at any time. Changes will be communicated via our website or email, and continued use of our Services following such modifications constitutes your acceptance of the updated Terms."}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{"10. Governing Law and Dispute Resolution"}</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>{"Governing Law:"}</strong>{" This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction where FalkenRidge is registered."}</li>
          <li><strong>{"Dispute Resolution:"}</strong>{" Any disputes arising from this Agreement shall be resolved through amicable negotiation. If a resolution cannot be reached, disputes will be submitted to arbitration or litigation as specified in the service contract."}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">{"11. Additional Clauses"}</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>{"Force Majeure:"}</strong>{" FalkenRidge is not liable for any failure to perform its obligations where such failure results from causes beyond our reasonable control, including natural disasters, war, or other force majeure events."}</li>
          <li><strong>{"Severability:"}</strong>{" If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect."}</li>
          <li><strong>{"Entire Agreement:"}</strong>{" This document, along with any referenced policies and contracts, constitutes the entire agreement between you and FalkenRidge regarding your use of our Services."}</li>
          <li><strong>{"Notices:"}</strong>{" Any notices or communications under this Agreement shall be sent to the contact details provided above."}</li>
        </ul>

        <p className="text-center text-sm mt-8 border-t pt-4">
          {"© 2025 FalkenRidge. All rights reserved."}
        </p>
      </div>
    </div>
  )
}

export default page
