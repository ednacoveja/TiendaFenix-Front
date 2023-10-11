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
          {/* Otros campos para editar */}
          <button onClick={handleSave}>Guardar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      ) : (
        <div>
          <p>{product.name}</p>
          <p>{product.description}</p>
          {/* Otros campos no editables */}
          <button onClick={handleEdit}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default EditProduct;