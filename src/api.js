// src/api.js  
import axios from 'axios';  

const API_URL = 'https://api.escuelajs.co/api/v1/categories';  

// Obtener todas las categorías (GET)  
export const fetchCategories = async () => {  
    try {  
        const response = await axios.get(API_URL);  
        return response.data;  
    } catch (error) {  
        console.error('Error fetching categories:', error);  
        throw error;  
    }  
};  

// Agregar una nueva categoría (POST)  
export const addCategory = async (category) => {  
    try {  
        const response = await axios.post(API_URL, category);  
        return response.data;  
    } catch (error) {  
        console.error('Error adding category:', error);  
        throw error;  
    }  
};  

// Actualizar una categoría existente (PUT)  
export const updateCategory = async (id, category) => {  
    try {  
        const response = await axios.put(`${API_URL}/${id}`, category);  
        return response.data;  
    } catch (error) {  
        console.error('Error updating category:', error);  
        throw error;  
    }  
};  

// Eliminar una categoría (DELETE)  
export const deleteCategory = async (id) => {  
    try {  
        await axios.delete(`${API_URL}/${id}`);  
        return id; // Retorna el ID para eliminarlo del estado en el componente  
    } catch (error) {  
        console.error('Error deleting category:', error);  
        throw error;  
    }  
};