import React from "react";
import { Navigation } from "@/components/Nav/Nav";

function TermsAndConditions() {
  return (
    <>
      <Navigation />
      <div className="container py-20 p-6 mx-auto text-gray-50">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Terms of Use
        </h1>
        <hr />
        <div className="p-4 space-y-4">
          <p>
            These meticulously crafted Terms of Use stand as the governing
            principles that encapsulate your interaction with our esteemed suite
            of services. By choosing to access or employ our services, you
            consciously and unequivocally consent to these terms.
          </p>

          <p>
            Kindly note that to partake in our services, a minimum age
            requirement of 13 years is stipulated. Furthermore, it is incumbent
            upon you to diligently safeguard the confidentiality of your account
            credentials, including your password, understanding the pivotal role
            they play in securing your engagement.
          </p>

          <p>
            It is pivotal to comprehend that our services are extended as is,
            devoid of any warranties, expressed or implied. While we steadfastly
            endeavor to maintain the highest standards of quality, we cannot be
            held liable for any ensuing damages or losses arising from the
            utilization of our services.
          </p>

          <p>
            Your commitment to adhering to the highest ethical standards is
            integral to our collaboration. As such, you explicitly pledge not to
            deploy our services for any illicit, deleterious, or unauthorized
            activities. Furthermore, any endeavors aimed at subverting the
            security or optimal functionality of our services are sternly
            discouraged.
          </p>

          <p>
            In alignment with our unwavering dedication to excellence, we retain
            the prerogative to effectuate alterations to our services or, as the
            need may arise, to conclude their provision entirely. This
            prerogative is exercised judiciously, with the objective of
            advancing the overall quality and scope of our offerings.
          </p>

          <p>
            We, at Creative Minds Graphics (Pty) Ltd, are committed to providing
            a safe and secure environment for our users. We strictly adhere to
            all applicable laws and regulations and expect our users to do the
            same. Any violation of these terms may result in immediate
            termination of your access to our services.
          </p>

          <p>
            We reserve the right to update these Terms of Use at any time. Any
            changes will be effective immediately upon posting to this page.
            Your continued use of our services following the posting of changes
            will constitute your acceptance of such changes.
          </p>

          <p>
            These terms, conceived with meticulous consideration, reflect the
            mutual expectations we uphold between you, the discerning user, and
            Creative Minds Graphics (Pty) Ltd. As we embark on this
            collaborative journey, let these terms underscore the commitment we
            collectively exhibit toward nurturing a secure, ethical, and
            productive digital environment.
          </p>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditions;
