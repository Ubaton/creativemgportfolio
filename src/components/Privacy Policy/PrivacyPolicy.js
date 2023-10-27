import React from "react";
import { Navigation } from "@/components/Nav/Nav";
import Glass from "../Glass/Glass";

function PrivacyPolicy() {
  const updatedate = {
    date: "October 27, 2023",
  };

  return (
    <>
      <Navigation />
      <Glass>
        <div className="overflow-y-auto max-h-screen">
          <div className="container py-20 p-6 mx-auto text-gray-50">
            <h1 className="text-2xl font-semibold mb-4 text-center">
              Privacy Policy
            </h1>
            <hr />
            <p className="text-xs text-zinc-700">{updatedate.date}</p>
            <div className="p-4 space-y-4">
              <p>
                Privacy is a fundamental value upheld by Creative Minds Graphics
                (Pty) Ltd. This Privacy Policy serves as a comprehensive
                document elucidating the methodologies we employ to collect,
                utilize, disclose, and safeguard the sanctity of your personal
                information throughout your engagement with our services.
              </p>
              <p>
                In the course of facilitating our services, we intentionally
                curate only the essential personal information necessary to
                provide and enhance the quality of our services. This data
                encompasses fundamental user particulars and usage insights, and
                its collection is conducted judiciously and calculatedly to
                enhance your experience.
              </p>
              <p>
                We are unwavering in our commitment to adopting security
                protocols that align with industry norms. These protocols are
                meticulously woven into our operational framework to serve as an
                impervious fortress, safeguarding your data. However, it is
                prudent to acknowledge that while we fortify our digital
                boundaries with the best defenses available, no internet-based
                communication or electronic data storage system can be entirely
                impervious to external threats.
              </p>
              <p>
                Your implicit consent to the terms enshrined in this Privacy
                Policy is understood as you engage with our services. By
                continuing to avail our services, you acknowledge and consent to
                the collection and utilization of information in accordance with
                the principles outlined herein.
              </p>
              <p>
                Your trust remains the cornerstone of our endeavors. We are
                steadfast in our commitment to protecting your privacy,
                recognizing it as an indispensable facet of your interaction
                with Creative Minds Graphics (Pty) Ltd.
              </p>
              <p>
                We reserve the right to modify this Privacy Policy at any time.
                Any changes will be promptly updated on this page. We encourage
                you to periodically review this Privacy Policy to stay informed
                about how we are helping to protect the personal information we
                collect.
              </p>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please feel free to contact us at any time. We are committed to
                resolving any complaints about our collection or use of your
                personal information.
              </p>
            </div>
          </div>
        </div>
      </Glass>
    </>
  );
}

export default PrivacyPolicy;
