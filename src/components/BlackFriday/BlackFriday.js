import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Glass from "../Glass/Glass";
import Link from "next/link";
// import { Navigation } from "@/components/Nav/Nav";

const BlackFridaySale = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [discount, setDiscount] = useState(25);
  const [daysRemaining, setDaysRemaining] = useState(0);

  const saleEndDate = new Date("2023-11-24T23:59:59");
  const currentDate = new Date();

  useEffect(() => {
    const timer = setInterval(() => {
      const timeRemaining = saleEndDate - new Date();
      const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      setDaysRemaining(daysRemaining);
      setDiscount(25);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {/* <Navigation /> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Black Friday Sale"
      >
        <div className="text-zinc-700">
          <h1 className="text-4xl font-semibold mb-6 text-center">
            Black Friday Special Sale
          </h1>
          <hr />
          <div className="p-4 space-y-6">
            <p>
              This Black Friday, Creative Minds Graphics (Pty) Ltd is excited to
              bring you exclusive discounts on our entire range of products!
              Elevate your creative projects and take advantage of the{" "}
              <span className="text-zinc-600">{discount}%</span> discount
              available across all our services.
            </p>
            <p>
              Sale Details:
              <br />- Discount:{" "}
              <span className="text-zinc-600">{discount}%</span>
              <br />
              - Sale Period: November 24, 2023
              <br />- Use Code:{" "}
              <span className="text-zinc-600">CMGBLACKFRIDAY20</span> at
              checkout
            </p>
            <p>
              Explore our diverse offerings, including web development, graphic
              design, video editing, logo design, and more. Whether you are
              launching a new project or enhancing your brand, this Black Friday
              sale is the perfect opportunity to benefit from professional
              creative services at an unbeatable price.
            </p>
            <p>
              Don't miss out on this limited-time offer to bring your creativity
              to new heights. The sale ends on{" "}
              <span className="text-zinc-600">
                {saleEndDate.toDateString()}
              </span>
              , so act fast!
            </p>
            <p>
              Enter the code{" "}
              <span className="text-zinc-600">CMGBLACKFRIDAY20</span> during
              checkout to apply the {discount}% discount to your order. Make
              this Black Friday special by investing in top-notch creative
              solutions from Creative Minds Graphics (Pty) Ltd.
            </p>
            <p>
              Thank you for choosing Creative Minds Graphics (Pty) Ltd. We look
              forward to being part of your creative journey!
            </p>
          </div>
          <Link href="/">
            <button className="text-zinc-600" onClick={closeModal}>
              Close
            </button>
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default BlackFridaySale;
