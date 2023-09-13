import React from "react";
import { Navigation } from "@/components/Nav/Nav";

function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <div className="container py-20 p-6 mx-auto text-gray-50">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Privacy Policy
        </h1>
        <hr></hr>
        <div className="p-4 space-y-4 ">
          <p>
            Privacy is a core value at Creative Minds Graphics (Pty) Ltd. This
            Privacy Policy serves to elucidate the methodologies we employ to
            gather, employ, reveal, and uphold the sanctity of your information
            throughout your engagement with our services.
          </p>

          <p>
            In the course of facilitating our services, we intentionally curate
            only the essential personal information, thereby adhering to the
            principle of minimalism. This data encapsulates fundamental user
            particulars and usage insights, which in turn aids us in refining
            the quality of our services. Be assured that our data collection
            practices are judicious and calculated, designed solely to enhance
            your experience.
          </p>

          <p>
            It is our unwavering commitment to adopt security protocols that are
            in tandem with industry norms. These protocols are meticulously
            woven into our operational framework to act as an impervious
            fortress, safeguarding your data. However, it is prudent to
            acknowledge that while we fortify our digital boundaries with the
            best defenses available, no internet-based communication or
            electronic data storage system can be entirely impervious to
            external threats.
          </p>

          <p>
            As you engage with our services, your implicit consent to the terms
            enshrined in this Privacy Policy is understood. By continuing to
            avail our services, you acknowledge and consent to the assortment
            and utilization of information in accordance with the tenets
            outlined herein.
          </p>

          <p>
            Your trust remains the cornerstone of our endeavors. We remain
            steadfast in our commitment to protecting your privacy, recognizing
            it as an indispensable facet of your interaction with Creative Minds
            Graphics (Pty) Ltd.
          </p>

          <p>
            We reserve the right to modify this Privacy Policy at any time. Any
            changes will be promptly updated on this page. We encourage you to
            periodically review this Privacy Policy to stay informed about how
            we are helping to protect the personal information we collect.
          </p>

          <p>
            If you have any questions or concerns about this Privacy Policy,
            please feel free to contact us at any time. We are committed to
            resolving any complaints about our collection or use of your
            personal information.
          </p>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;