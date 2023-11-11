import React from "react";
import { Navigation } from "@/components/Nav/Nav";
import Glass from "../Glass/Glass";

const PrivacyPolicy = () => {
  const updatedate = {
    date: "October 27, 2023",
  };

  return (
    <>
      <Navigation />
      <Glass>
        <div className="overflow-y-auto max-h-screen">
          <div className="container py-20 p-6 mx-auto text-zinc-50">
            <h1 className="text-4xl font-semibold mb-6 text-center">
              Privacy Policy
            </h1>
            <hr />
            <p className="text-sm text-zinc-700">{updatedate.date}</p>
            <div className="p-4 space-y-6">
              <p>
                Creative Minds Graphics (Pty) Ltd (CMG) holds the privacy and
                security of your personal information with the utmost
                importance. This comprehensive Privacy Policy outlines the
                meticulous practices employed by CMG in the collection, use,
                disclosure, and protection of your data throughout your
                engagement with our services.
              </p>
              <p>
                In our commitment to providing exceptional services, we
                intentionally and thoughtfully collect only essential personal
                information. This includes fundamental user details and usage
                insights, which are utilized strategically to enhance the
                overall user experience.
              </p>
              <p>
                CMG upholds industry standards through the implementation of
                robust security protocols. These protocols are seamlessly
                integrated into our operations to fortify our digital defenses,
                ensuring the confidentiality and integrity of your data.
                However, it is crucial to acknowledge that despite our stringent
                measures, no online communication or data storage system is
                entirely impervious to external threats.
              </p>
              <p>
                By engaging with our services, your implicit consent to the
                terms outlined in this Privacy Policy is acknowledged.
                Continuing to use our services affirms your understanding and
                consent to the collection and utilization of information as
                detailed herein.
              </p>
              <p>
                Your trust is the cornerstone of our efforts at CMG. We remain
                unwavering in our commitment to safeguarding your privacy,
                recognizing it as an integral and indispensable facet of your
                interaction with Creative Minds Graphics (Pty) Ltd.
              </p>
              <p>
                CMG retains the right to modify this Privacy Policy at any time.
                Updates will be promptly posted on this page, and we encourage
                you to periodically review this document to stay informed about
                the measures in place to protect the personal information we
                collect.
              </p>
              <p>
                Should you have any questions or concerns about this Privacy
                Policy, we invite you to contact us at any time. CMG is
                committed to addressing your queries or complaints regarding the
                collection or use of your personal information.
              </p>
            </div>
          </div>
        </div>
      </Glass>
    </>
  );
};

export default PrivacyPolicy;
