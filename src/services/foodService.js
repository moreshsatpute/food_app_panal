// src/services/foodService.js
import { db, storage } from '../config/firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';



const foodCollectionRef = collection(db, 'foods');

// src/services/foodService.js

export const uploadImage = async (file) => {
  const cloudName = "dt3bkyanp";
  const uploadPreset = "MyFoodApp";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    console.log("📤 Uploading image to Cloudinary...");
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Upload failed:", errorData);
      throw new Error("Upload failed");
    }

    const data = await response.json();
    console.log("✅ Upload success. Image URL:", data.secure_url);
    return data.secure_url;
  } catch (error) {
    console.error("❌ Cloudinary upload failed:", error);
    throw error;
  }
};





export const addFood = async (data) => {
  try {
    return await addDoc(foodCollectionRef, data);
  } catch (error) {
    console.error('❌ Error adding food to Firestore:', error);
    throw error;
  }
};

export const getAllFoods = async () => {
  try {
    const snapshot = await getDocs(foodCollectionRef);
    return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error('❌ Error fetching foods:', error);
    throw error;
  }
};

export const deleteFood = async (id) => {
  try {
    const foodDoc = doc(db, 'foods', id);
    return await deleteDoc(foodDoc);
  } catch (error) {
    console.error('❌ Error deleting food:', error);
    throw error;
  }
};

