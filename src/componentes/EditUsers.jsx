import React, { useState } from "react";

const EditUser = ({ user, onSave }) => {
  const [editedUser, setEditedUser] = useState(user);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = () => {
    onSave(editedUser);
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <div>
      {editing ? (
        <form onSubmit={handleSave}>
          <input
            type="text"
            name="name"
            value={editedUser.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="price"
            value={editedUser.instagram}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={editedUser.description}
            onChange={handleChange}
          />

          <button type="submit">Guardar</button>
          <button type="button" onClick={handleCancel}>
            Cancelar
          </button>
        </form>
      ) : (
        <div>
          <p>Nombre: {user.nombre}</p>
          <p>Instagram: {user.instagram}</p>
          <p>Description: {user.description}</p>
          <button onClick={handleEdit}>Editar</button>
        </div>
      )}
    </div>
  );
};

export default EditUser;
