import React, { useState } from 'react';
import { addFood, uploadImage } from '../services/foodService';
import { useNavigate } from 'react-router-dom';
import {
  FaUtensils, FaRupeeSign, FaTags, FaConciergeBell,
  FaClock, FaStar, FaStore, FaMapMarkerAlt, FaPhone, FaAlignLeft, FaLeaf, FaHamburger,
  FaGalacticSenate
} from 'react-icons/fa';
import { MdRestaurantMenu } from 'react-icons/md';



const AddFood = () => {
  const [loader , setLoader]=useState(false)

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    category: '',
    type: '',
    mealType: '',
    restaurantName: '',
    restaurantAddress: '',
    contact: '',
    rating: '',
    prepTime: '',
    availability: 'In stock',
  });
  console.log("this is a data filliup",formData)
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true)
    try {
      let imageUrl = '';
    if (image) {
  console.log("Uploading image to storage...");
  imageUrl = await uploadImage(image);
  console.log("ImageUpload url", imageUrl); // <-- Add this line
  if (!imageUrl) {
    alert('Image upload failed. Please try again.');
    return;
  }
}
      const foodData = { ...formData, image: imageUrl };
      console.log("Submitting to Firestore:", foodData);

      await addFood(foodData);
      alert('Food item added!');
      navigate('/');
    } catch (error) {
      console.error('Error adding food:', error);
      alert('Failed to add food item. Please try again.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow rounded">
       {loader ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-1">
              <MdRestaurantMenu className="text-green-600" /> Add New Food Item
            </h2>
            <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">AI Powered</span>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-3">

            <div>
              <label className="block mb-1 font-medium"><FaUtensils className="inline mr-1" /> Food Name</label>
              <input name="name" value={formData.name} onChange={handleChange} className="border p-1 text-sm text-sm rounded w-full" required />
            </div>

            <div>
              <label className="block mb-1 font-medium"><FaRupeeSign className="inline mr-1" /> Price</label>
              <input name="price" value={formData.price} onChange={handleChange} className="border p-1 text-sm rounded w-full" required />
            </div>

            <div>
              <label className="block mb-1 font-medium"><FaTags className="inline mr-1" /> Category</label>
              <input name="category" value={formData.category} onChange={handleChange} className="border p-1 text-sm rounded w-full" />
            </div>

            <div>
              <label className="block mb-1 font-medium"><FaLeaf className="inline mr-1" /> Type</label>
              <select name="type" value={formData.type} onChange={handleChange} className="border p-1 text-sm rounded w-full">
                <option value="">Select Type</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium"><FaConciergeBell className="inline mr-1" /> Meal Type</label>
              <select name="mealType" value={formData.mealType} onChange={handleChange} className="border p-1 text-sm rounded w-full">
                <option value="">Select Meal Type</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium"><FaStore className="inline mr-1" /> Restaurant Name</label>
              <input name="restaurantName" value={formData.restaurantName} onChange={handleChange} className="border p-1 text-sm rounded w-full" />
            </div>

            <div>
              <label className="block mb-1 font-medium"><FaMapMarkerAlt className="inline mr-1" /> Restaurant Address</label>
              <input name="restaurantAddress" value={formData.restaurantAddress} onChange={handleChange} className="border p-1 text-sm rounded w-full" />
            </div>

            <div>
              <label className="block mb-1 font-medium"><FaPhone className="inline mr-1" /> Contact</label>
              <input name="contact" value={formData.contact} onChange={handleChange} className="border p-1 text-sm rounded w-full" />
            </div>

            <div>
              <label className="block mb-1 font-medium"><FaStar className="inline mr-1" /> Rating</label>
              <input name="rating" placeholder="1 to 5" value={formData.rating} onChange={handleChange} className="border p-1 text-sm rounded w-full" />
            </div>

            <div>
              <label className="block mb-1 font-medium"><FaClock className="inline mr-1" /> Preparation Time (mins)</label>
              <input name="prepTime" value={formData.prepTime} onChange={handleChange} className="border p-1 text-sm rounded w-full" />
            </div>

            <div>
              <label className="block mb-1 font-medium"><FaHamburger className="inline mr-1" /> Availability</label>
              <select name="availability" value={formData.availability} onChange={handleChange} className="border p-1 text-sm rounded w-full">
                <option value="In stock">In Stock</option>
                <option value="Out of stock">Out of Stock</option>
              </select>
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block mb-1 font-medium"><FaAlignLeft className="inline mr-1" /> Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-1 text-sm rounded"
                rows={3}
                required
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Food Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} className="border p-1 text-sm text-sm rounded w-full" />
              {preview && (
                <div className="mt-3">
                  <img src={preview} alt="Preview" className="h-40 object-cover rounded border" />
                </div>
              )}
            </div>

            <div className="col-span-1 md:col-span-2 text-center">
              <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
                Add Food
              </button>
            </div>
          </form>
        </div>
      )}
    </div>

  );
};

export default AddFood;
