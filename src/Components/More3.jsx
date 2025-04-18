import React from 'react'

function More3() {
  const productList = [
    "Multivitamin Syrup",
    "Vitamin C Tablets",
    "B-Complex Capsules",
    "Vitamin D3 Softgels",
    "Calcium + Vitamin D Tablets",
    "Omega-3 Capsules",
    "Iron + Folic Acid Tablets",
    "Vitamin E Skin Oil",
    "Zinc + Vitamin C Gummies",
    "Biotin Hair & Nail Tablets",
  ];
  return (
  
    <>
    {/* Banner */}
    <div className='p-18 '>
        <img
          src="https://www.medipharmadrughouse.com/images/feed-supplements-banner.jpg"
          alt="Vitamins Banner"
          className="w-full h-72 object-cover rounded-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between gap-8 px-6 md:px-16 py-10 bg-gradient-to-br from-white to-gray-100">
        {/* Vitamins List */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">Feed Supplementary</h1>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>D-Calcium Pantothenate</li>
            <li>Folic Acid</li>
            <li>Methyl Cobalmine</li>
            <li>Sodium Ascorbate</li>
            <li>Vitamin A Palmitate 1:7</li>
            <li>Vitamin B1 HCL</li>
            <li>Vitamin B1 Mononitrate</li>
            <li>Vitamin B12</li>
            <li>Vitamin B2</li>
            <li>Vitamin B6</li>
            <li>Vitamin C</li>
            <li>Vitamin D3</li>
            <li>Vitamin E Acetate (Oily)</li>
          </ul>
        </div>

        {/* Product List */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Product List</h2>
          <div className="grid grid-cols-1 gap-4">
            {productList.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <p className="text-gray-700 font-medium text-center">{product}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default More3