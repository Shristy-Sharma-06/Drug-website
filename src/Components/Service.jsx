import React from "react";

function Service() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              UX Services
            </h1>
            <h2 className="text-3xl md:text-5xl text-gray-700 font-semibold mt-4">
              <p>For Healthcare</p>
              <p>Product Teams</p>
            </h2>
          </div>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Global healthcare leaders and emerging product teams partner with us
            to enhance their UX capabilities, enabling them to ship better
            software, scale faster, and make a greater impact.
          </p>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <img
            src="https://www.koruux.com/_next/image/?url=%2Fassets%2FservicePImages%2FBanner.webp&w=1920&q=75"
            alt="UX Services Banner"
            className="rounded-3xl shadow-2xl w-full max-w-md md:max-w-lg object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center text-center py-12 px-4 mt-16 md:px-10 bg-gray-50">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl md:text-4xl  text-gray-800 leading-relaxed">
            Whether you have a specific UX need, are starting from scratch to
            achieve product-market fit, or seek a long-term strategic partner,
          </h2>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            We can help in the following areas...
          </h2>
        </div>
      </div>

      <div className="bg-white py-16 px-6 md:px-20 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
                UX Research
              </h1>
              <hr className="w-full border-1 border-gray-500 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800">
                User Experience Intelligence
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              We conduct comprehensive UX research to gain in-depth insights
              about your users through contextual inquiries, user and
              stakeholder interviews, surveys, A/B testing, and diary studies.
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Gain rich insights about your users via real-world contextual
                inquiries and data-driven methods.
              </li>
              <li>
                Eliminate guesswork by identifying pain points, uncovering
                opportunities, and delivering actionable recommendations.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://www.koruux.com/_next/image/?url=%2Fassets%2FservicePImages%2FUX%20Research.webp&w=1920&q=75"
              alt="UX Research"
              className="rounded-3xl shadow-xl w-full max-w-md md:max-w-lg object-cover"
            />
          </div>
        </div>
      </div>

      

<div className="bg-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://www.koruux.com/_next/image/?url=%2Fassets%2FservicePImages%2Fs%26g.webp&w=1920&q=75"
            alt="Strategy & Consultation"
            className="rounded-3xl shadow-xl w-full max-w-md md:max-w-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
              Strategy & Consultation
            </h1>
            <hr className="w-full border-1 border-gray-500 mb-4 mt-4" />
            <h2 className="text-2xl font-semibold text-gray-800">
              UX Strategy
            </h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            We always begin by developing a comprehensive UX roadmap that aligns
            with your objectives, envisioning the full scope of your vision, and
            creating a clear, actionable execution plan.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Conceptualize multiple ways to solve key UX challenges while
              considering all stakeholder perspectives.
            </li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed">
            <li>
            A shared vision and alignment allow you to move faster and more
            confidently when you begin to execute, laying the foundation for
            elegant, functional designs that exceed user expectations.
            </li>
            
          </p>
        </div>
      </div>
    </div>


    </section>
  );
}

export default Service;