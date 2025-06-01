// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { getAllFoods, deleteFood } from '../services/foodService';
import FoodCard from '../components/FoodCard';

const Dashboard = () => {
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    const data = await getAllFoods();
    setFoods(data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const handleDelete = async (id) => {
    await deleteFood(id);
    fetchFoods();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Food Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {foods.map(food => (
          <FoodCard key={food.id} food={food} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
