import React from 'react';  
import Swal from 'sweetalert2';  

const CategoryList = ({ categories, onEdit, onDelete }) => {  
    const handleDelete = (id, name) => {  
        Swal.fire({  
            title: `¿Eliminar categoría "${name}"?`,  
            icon: 'warning',  
            showCancelButton: true,  
            confirmButtonText: 'Eliminar',  
            cancelButtonText: 'Cancelar',  
        }).then((result) => {  
            if (result.isConfirmed) onDelete(id);  
        });  
    };  

    return (  
        <div className="row">  
            {categories.map((category) => (  
                <div className="col-md-4 mb-4" key={category.id}>  
                    <div className="card">  
                        <img src={category.image} className="card-img-top" alt={category.name} />  
                        <div className="card-body">  
                            <h5 className="card-title">{category.name}</h5>  
                            <div className="d-flex justify-content-between">  
                                <button  
                                    className="btn btn-warning btn-sm"  
                                    onClick={() => onEdit(category)}  
                                >  
                                    Editar  
                                </button>  
                                <button  
                                    className="btn btn-danger btn-sm"  
                                    onClick={() => handleDelete(category.id, category.name)}  
                                >  
                                    Eliminar  
                                </button>  
                            </div>  
                        </div>  
                    </div>  
                </div>  
            ))}  
        </div>  
    );  
};  

export default CategoryList;
