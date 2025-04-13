import React from 'react';
import image2 from './Images/image7.jpg';
import image3 from './Images/image8.jpg';
import image4 from './Images/image9.jpg';

function About() {
  const sections = [
    {
      title: "Helping you achieve your goals",
      text: "Our mission is to provide you with best-practices marketing that helps you achieve your specific goals. We don’t measure our success by work that is simply cute or clever. Instead, we create and apply proven, effective, and ethical marketing systems that produce quantifiable results.",
      image: image2,
    },
    {
      title: "Empowering Your Brand",
      text: "We help healthcare brands establish trust, authority, and strong presence in the digital world. With a strategic blend of creativity and data, we deliver powerful campaigns that resonate with your audience.",
      image: image3,
    },
    {
      title: "Transforming Patient Experience",
      text: "Your patient’s journey starts online. We make sure it’s seamless, impactful, and compassionate. Our digital strategies are tailored to elevate engagement and boost loyalty.",
      image: image4,
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      
      {/* Mission & Vision */}
      <section className="px-6 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-12 text-center md:text-left items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-orange-600 mb-4">Our Mission</h1>
            <p className="text-lg leading-relaxed">
              Our mission is to provide affordable and accessible healthcare to people from all walks of life.
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-orange-600 mb-4">Our Vision</h1>
            <p className="text-lg leading-relaxed">
              We envision a world where health is available fairly for all, regardless of a person's economic or social background.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-orange-300 mx-6 md:mx-20" />

      {/* About Section */}
      <section className="px-6 md:px-20 py-16 text-center md:text-left">
        <h2 className="text-2xl font-semibold text-orange-400 mb-2 uppercase tracking-wide">About Healthcare Success</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 leading-snug mb-6">
          We are a full-service integrated marketing and advertising agency.
        </h1>
        <p className="text-xl italic max-w-3xl mx-auto md:mx-0 tracking-wide text-gray-700">
          Healthcare Success is a full-service marketing and advertising agency dedicated exclusively to helping healthcare organizations attract new patients, enhance their brands and ethically influence healthcare professionals.
        </p>
      </section>

      <hr className="border-orange-300 mx-6 md:mx-20" />

      {/* Image Content Sections */}
      {sections.map((sec, idx) => (
        <section
          key={idx}
          className={`py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 ${
            idx % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <img
            src={sec.image}
            // alt={Section ${idx + 1}}
            className="w-full md:w-1/2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-orange-600">{sec.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700">{sec.text}</p>
          </div>
        </section>
      ))}

      <hr className="border-orange-300 mx-6 md:mx-20 mb-10" />
    </div>
  );
}

export default About;