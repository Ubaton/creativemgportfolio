import React from "react";
import { Card } from "@/components/Card/Card";
import { Navigation } from "@/components/Nav/Nav";

const PriceList = () => {
  // Define your price list data
  const products = [
    {
      name: "Website Development",
      price: "Starting at R XXX",
    },
    {
      name: "3D Digital Art",
      price: "Starting at R XXX",
    },
    {
      name: "Photo Editing",
      price: "Starting at R XXX",
    },
    {
      name: "Video Editing",
      price: "Starting at R XXX",
    },
    {
      name: "Logo Design",
      price: "Starting at R XXX",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-center text-4xl font-semibold">Price List</h1>
        <div className="container p-8">
          <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
            {products.slice(0, 3).map((product, index) => (
              <Card key={index}>
                <div className="p-4">
                  <h2 className="text-2xl">{product.name}</h2>
                  <p>{product.price}</p>
                </div>
              </Card>
            ))}
            {products.slice(3).map((product, index) => (
              <Card key={index}>
                <div className="p-4">
                  <h2 className="text-2xl">{product.name}</h2>
                  <p>{product.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceList;
