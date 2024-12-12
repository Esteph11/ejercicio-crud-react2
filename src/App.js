import React, { useState, useEffect } from 'react';  
import CategoryForm from './components/CategoryForm';  
import CategoryList from './components/CategoryList';  
import { fetchCategories, addCategory, deleteCategory } from './api';  
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  

const App = () => {  
    const [categories, setCategories] = useState([]);  
  
    useEffect(() => {  
        loadCategories();  
    }, []);  
  
    const loadCategories = async () => {  
        try {  
            const data = await fetchCategories();  
            setCategories(data);  
        } catch (error) {  
            toast.error("Error al cargar las categorías");  
        }  
    };  

    const handleAddCategory = async (newCategory) => {  
        try {  
            const addedCategory = await addCategory(newCategory);  
            setCategories([...categories, addedCategory]);  
            toast.success("Categoría añadida con éxito");  
        } catch (error) {  
            toast.error("Error al añadir la categoría");  
        }  
    };  

    const handleDeleteCategory = async (id) => {  
        try {  
            await deleteCategory(id);  
            setCategories(categories.filter(category => category.id !== id));  
            toast.success("Categoría eliminada con éxito");  
        } catch (error) {  
            toast.error("Error al eliminar la categoría");  
        }  
    };  

    return (  
        <div className="container mt-5">  
            <h1 className="text-center mb-4">Gestión de Categorías</h1>  
            <CategoryForm addCategory={handleAddCategory} />  
            <CategoryList  
                categories={categories}  
                onEdit={(category) => console.log("Edit category", category)} // Aquí deberías implementar la lógica de edición  
                onDelete={handleDeleteCategory}  
            />  
            <ToastContainer />  
        </div>  
    );  
};  

export default App;  
