import React from "react";
import { Link } from "react-router-dom";

function More1() {
  const images = [
    "https://www.apexdrugs.com/assets/product-images/PP1/Bectaso.png",
    "https://www.apexdrugs.com/assets/product-images/PP1/Budeair.png",
    "https://www.apexdrugs.com/assets/product-images/PP1/Inhamol.png",
    "https://www.apexdrugs.com/assets/product-images/PP1/Iprasa.png",
    "https://www.apexdrugs.com/assets/product-images/PP1/Salmutica%2025+125.png",
    "https://www.apexdrugs.com/assets/product-images/PP1/Salmutica%2025+250.png",
    "https://www.apexdrugs.com/assets/product-images/PP2/Bisoprolol%20fumarate.jpg",
    "https://www.apexdrugs.com/assets/product-images/PP2/Clotrimazol.jpg",
    "https://www.apexdrugs.com/assets/product-images/PP2/Indura.jpg",
    "https://www.apexdrugs.com/assets/product-images/PP3/Sertraline%20Chlorhydrate.jpg",
    "https://www.apexdrugs.com/assets/product-images/PP3/Amlodipine.jpg",
    "https://www.apexdrugs.com/assets/product-images/PP3/Baclofen.jpg",

    "https://www.apexdrugs.com/assets/product-images/PP3/p0img_XL%20(5).jpg",
    "https://www.apexdrugs.com/assets/product-images/PP3/p0img_XL.jpg",
    "https://www.apexdrugs.com/assets/product-images/PP3/p0img_XL%20(1).jpg",
  ];

  return (
    <>
      {/* Header Section */}
      <div className="bg-orange-300 w-full py-16 mt-16 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
          Product Gallery
        </h1>

        <div className="space-x-2 text-lg">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <span className="text-white">/</span>
          <Link to="/products" className="text-white hover:underline">
            Products
          </Link>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="bg-gradient-to-br from-white to-gray-100 py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={src}
                alt={`Product ${index + 1}`}
                className="w-full h-48 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default More1;