import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/UserSlice";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    image: null
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.age ||
      !formData.phone ||
      !formData.image
    ) {
      toast.error("Please fill all fields");
      return;
    }

    const base64Image = await convertToBase64(formData.image);

    const newUser = {
      id: uuid(),
      name: formData.name,
      email: formData.email,
      age: formData.age,
      phone: formData.phone,
      image: base64Image
    };

    dispatch(addUser(newUser));

    setFormData({
      name: "",
      email: "",
      age: "",
      phone: "",
      image: null
    });

    toast.success("User added successfully!");
  };

  return (
    <div>
      <h2 className="md:text-4xl text-4xl text-center font-bold text-green-500 ">
        User <span className="text-black">Management</span>
      </h2>

      <form
        className="grid grid-cols-2 md:grid-cols-2 gap-1"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        />

        {formData.image && (
          <div className="md:col-span-2">
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-full border"
            />
          </div>
        )}

        <button
          type="submit"
        
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default UserForm;
