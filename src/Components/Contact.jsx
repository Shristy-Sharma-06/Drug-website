import React, { useState } from "react";
import Dropdown from "./Dropdown";
import image6 from "./Images/image6.jpg";
import { RiPhoneLine, RiMapPinLine, RiBuildingLine } from "@remixicon/react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    message: "",
  });
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [selectTopic, setSelect] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Data:", {
      ...formData,
      country,
      state,
      city,
      topic: selectTopic,
    });
    alert("Data submitted successfully");

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      message: "",
    });
    setCountry("");
    setState("");
    setCity("");
    setSelect("");
  };

  return (
    <div className="min-h-screen">
      <div
        className="flex flex-col md:flex-row gap-8 p-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image6})` }}
      >
        {/* Left Text Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-6 rounded-2xl">
          <h2 className="text-5xl font-bold mb-4 text-orange-600">
            Contact Us
          </h2>
          <p className="text-black-700 text-center max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quia
            eum fugiat tenetur dolores natus, magni laboriosam, iste quaerat
            exercitationem delectus ipsa. Architecto distinctio quo nisi tempore
            officia laudantium aut.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 bg-white bg-opacity-90 rounded-2xl p-6">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              name="firstName"
              value={formData.firstName}
              type="text"
              placeholder="Enter your First Name"
              className="border p-2 rounded w-full"
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              value={formData.lastName}
              type="text"
              placeholder="Enter your Last Name"
              className="border p-2 rounded w-full"
              onChange={handleChange}
              required
            />
            <input
              name="company"
              value={formData.company}
              type="text"
              placeholder="Enter your Company/institution"
              className="border p-2 rounded w-full"
              onChange={handleChange}
              required
            />

            {/* Dropdowns */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Dropdown
                options={["India", "USA"]}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />

              <Dropdown
                options={
                  country === "India"
                    ? ["Delhi", "Maharashtra"]
                    : country === "USA"
                    ? ["California", "Texas"]
                    : []
                }
                value={state}
                onChange={(e) => setState(e.target.value)}
                disabled={!country}
              />

              <Dropdown
                options={
                  state === "Delhi"
                    ? ["New Delhi", "Old Delhi"]
                    : state === "Maharashtra"
                    ? ["Mumbai", "Pune"]
                    : state === "California"
                    ? ["Los Angeles", "San Francisco"]
                    : state === "Texas"
                    ? ["Houston", "Dallas"]
                    : []
                }
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={!state}
              />
            </div>

            <Dropdown
              options={[
                "Protein Chemistry Support",
                "Primary Antibody",
                "Protein Chemistry",
                "Antibody",
              ]}
              value={selectTopic}
              onChange={(e) => setSelect(e.target.value)}
            />

            <textarea
              name="message"
              value={formData.message}
              cols="45"
              rows="5"
              placeholder="Write your message here"
              className="border p-2 rounded w-full resize-none"
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      

     {/* Cards Section */}
<div className="flex flex-col md:flex-row gap-6 p-20">
  {/* Phone Number Card */}
  <div className="flex flex-col items-start gap-4 bg-white shadow-md rounded-2xl p-10 w-full md:w-1/3">
    <RiPhoneLine className="text-3xl text-orange-600" />
    <div>
      <p className="font-semibold text-gray-700">Phone Number</p>
      <p className="text-gray-600">1234567890</p>
    </div>
  </div>

  {/* Laboratory Address Card */}
  <div className="flex items-start gap-4 bg-white shadow-md rounded-2xl p-10 w-full md:w-1/3">
    <RiMapPinLine className="text-3xl text-orange-600" />
    <div>
      <p className="font-semibold text-gray-700">Laboratory Address</p>
      <p className="text-gray-600">
        2055 Wood Street, Suite 102 Sarasota, FL 34237
      </p>
    </div>
  </div>

  {/* Corporate Address Card */}
  <div className="flex items-start gap-4 bg-white shadow-md rounded-2xl p-10 w-full md:w-1/3">
    <RiBuildingLine className="text-3xl text-orange-600" />
    <div>
      <p className="font-semibold text-gray-700">Corporate Address</p>
      <p className="text-gray-600">
        2055 Wood Street, Suite 206 Sarasota, FL 34237
      </p>
    </div>
  </div>
</div>

    </div>
  );
}

export default Contact;
