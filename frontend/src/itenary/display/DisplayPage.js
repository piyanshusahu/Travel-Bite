import React from 'react';
import { useLocation } from 'react-router-dom';

function DisplayPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const src = queryParams.get('src');
  const dest = queryParams.get('dest');
  const no = queryParams.get('no');
  const dep = queryParams.get('dep');
  const ret = queryParams.get('ret');

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="info bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
        <p className="text-lg font-semibold text-gray-800">
          {`Trip from ${src} to ${dest}`}
        </p>
        <p className="text-md text-gray-600">Travelers: {no}</p>
        <p className="text-md text-gray-600">Departure: {dep}</p>
        <p className="text-md text-gray-600">Return: {ret}</p>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
        <p className="text-lg font-semibold text-gray-800">Hotels</p>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
        <p className="text-lg font-semibold text-gray-800">Rent</p>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
        <p className="text-lg font-semibold text-gray-800">Visit</p>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
        <p className="text-lg font-semibold text-gray-800">Food</p>
      </div>
    </div>
  );
}

export default DisplayPage;
