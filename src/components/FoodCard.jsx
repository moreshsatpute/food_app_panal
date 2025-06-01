// src/components/FoodCard.jsx
import React from "react";

const FoodCard = ({ food, onDelete }) => {
  console.log("this is a food", food);
  return (
    <div className="border p-4 shadow rounded bg-white">
      <img
        src={food.image}
        alt={food.name}
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{food.name}</h3>
      <p className="text-gray-600 text-sm">{food.description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-green-700 font-semibold">₹{food.price}</span>
        <p
          className={`text-sm font-medium ${
            food.availability.toLowerCase() === "in stock"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {food.availability}
        </p>
        <button
          onClick={() => onDelete(food.id)}
          className="text-red-600 hover:underline text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
