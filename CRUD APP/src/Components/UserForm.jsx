// src/components/UserForm.js
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../slices/UserSlice";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

const UserForm = ({ editData, setEditData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    image: null
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, age, phone, image } = formData;
    if (!name || !email || !age || !phone) {
      toast.error("Please fill all fields");
      return;
    }

    const img =
      typeof image === "string" ? image : await convertToBase64(image);

    const user = {
      ...formData,
      image: img,
      id: editData ? formData.id : uuid()
    };

    if (editData) {
      dispatch(updateUser(user));
      toast.success("User updated");
    } else {
      dispatch(addUser(user));
      toast.success("User added");
    }

    setFormData({ name: "", email: "", age: "", phone: "", image: null });
    setEditData(null);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-4 md:grid-cols-2">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 rounded"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 rounded"
      />
      <input
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        className="border p-2 rounded"
      />
      <input
        name="phone"
        type="number"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="border p-2 rounded"
      />
      <input
        type="file"
        name="image"
        onChange={handleChange}
        className="md:col-span-2"
      />

      {formData.image && (
        <img
          src={
            typeof formData.image === "string"
              ? formData.image
              : URL.createObjectURL(formData.image)
          }
          alt="preview"
          className="w-24 h-24 object-cover rounded-full border"
        />
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {editData ? "Update" : "Add"} User
      </button>
    </form>
  );
};

export default UserForm;
