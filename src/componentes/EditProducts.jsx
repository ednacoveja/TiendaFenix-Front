import React, { useState } from "react";

const EditProduct = ({ product, onSave }) => {
    const [editedProduct, setEditedProduct] = useState(product);
    const [editing, setEditing] = useState(false);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleCancel = () => {
        setEditing(false);
    };

    const handleSave = () => {
        onSave(editedProduct);
        setEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    return (
        <div>
            {editing ? (
                <div>
                    <input
                        type="text"
                        name="name"
                        value={editedProduct.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        value={editedProduct.description}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="price"
                        value={editedProduct.price}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="cantidad"
                        value={editedProduct.cantidad}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="type"
                        value={editedProduct.type}
                        onChange={handleChange}
                    />
                </div>
            ) : (
                <div>
                    <p>Nombre: {product.name}</p>
                    <p>Tipo: {product.type}</p>
                    <p>Precio: {product.price}</p>
                    <p>Cantidad: {product.cantidad}</p>
                    <p>Description: {product.description}</p>
                    <button onClick={handleEdit}>Editar</button>
                </div>
            )}
        </div>
    );
};

export default EditProduct;