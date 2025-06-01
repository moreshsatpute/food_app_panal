// src/services/foodService.js
import { db, storage } from '../config/firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const foodCollectionRef = collection(db, 'foods');

export const uploadImage = async (file) => {
  try {
    console.log('📤 Uploading image:', file.name);

    const storageRef = ref(storage, `foods/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);

    console.log('✅ Upload successful:', snapshot.metadata.fullPath);

    const url = await getDownloadURL(storageRef);
    console.log('🔗 Download URL:', url);

    return url;
  } catch (error) {
    console.error('❌ Error uploading image:', error);
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

