import React from 'react';

const Dropdown = ({ label, options = [], value, onChange, disabled = false }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-gray-700">{label}</label>
      <select
        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
