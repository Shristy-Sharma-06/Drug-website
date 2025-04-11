import React from "react";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image4.jpg";
import image5 from "./Images/image5.webp";

function Home() {
  const items = [
    { id: 1, title: 'ffghgh', price: '$6889', img: image2 },
    { id: 2, title: 'ffghgh', price: '$6889', img: image3 },
    { id: 3, title: 'ffghgh', price: '$6889', img: image4 },
    { id: 4, title: 'ffghgh', price: '$6889', img: image5 },
  ];
  return (
    <>
      {/* section first */}
      <div className="w-full h-screen">
        <div
          className="h-screen bg-cover bg-center bg-no-repeat flex items-center p-4 md:p-8"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
          }}
        >
          <div className="text-white max-w-2xl space-y-4">
            <p className="font-extrabold">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                IDENTiFYN™
              </span>
            </p>
            <p className="font-semibold">
              <span className="text-orange-600 text-4xl sm:text-5xl md:text-6xl font-bold">
                Super Resolution
              </span>
            </p>
            <p className="font-medium">
              <span className=" text-4xl sm:text-5xl md:text-6xl font-bold">
                Applications & Services
              </span>
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              <span>
                Delivering unprecedented power, speed, and access to multimodal
                super resolution microscopy, reagents, applications, and
                discovery.
              </span>
            </p>
          </div>
        </div>
      </div>

{/* section second */}

<div className="p-26">
      {/* Headings */}
      <div className="mb-12 text-center">
        <p className="text-4xl sm:text-5xl md:text-5xl font-bold text-orange-400">
          <span>Featured Super Resolution Primary and</span>
        </p>
        <p className="text-4xl sm:text-5xl md:text-5xl font-bold text-red-500 mt-4">
          <span>Secondary Antibody Reagents</span>
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4"
          >
            <img
              src={item.img || 'https://via.placeholder.com/150'}
              alt={item.title}
              className="w-full h-40 object-cover rounded"
            />
            <p className="mt-4 font-medium text-lg">{item.title}</p>
            <p className="text-red-600 font-semibold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>    </>
  );
}

export default Home;
