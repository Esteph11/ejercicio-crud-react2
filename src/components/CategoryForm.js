import React, { useState } from 'react';  
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  

const CategoryForm = ({ addCategory }) => {  
    const [category, setCategory] = useState({ name: '', image: '' });  

    const handleChange = (e) => {  
        setCategory({ ...category, [e.target.name]: e.target.value });  
    };  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        if (!category.name || !category.image) {  
            toast.error("Todos los campos son obligatorios");  
            return;  
        }  
        addCategory(category);  
        setCategory({ name: '', image: '' });  
        toast.success("Categoría añadida con éxito");  
    };  

    return (  
        <form onSubmit={handleSubmit} className="mb-3">  
            <div className="form-group">  
                <label>Nombre de la Categoría</label>  
                <input  
                    type="text"  
                    className="form-control"  
                    name="name"  
                    value={category.name}  
                    onChange={handleChange}  
                />  
            </div>  
            <div className="form-group">  
                <label>URL de la Imagen</label>  
                <input  
                    type="text"  
                    className="form-control"  
                    name="image"  
                    value={category.image}  
                    onChange={handleChange}  
                />  
            </div>  
            <button type="submit" className="btn btn-primary">Agregar Categoría</button>  
            <ToastContainer />  
        </form>  
    );  
};  

export default CategoryForm;  
