import React from "react";
import Card from "../../components/Card";

function Books() {
  return (
    <div className="flex flex-col items-center px-4 py-8 min-h-screen bg-gray-50">
      <h1 className="mb-8 text-4xl font-extrabold text-center text-gray-900 tracking-tight rounded-lg">
        Favourites
      </h1>
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Books;
