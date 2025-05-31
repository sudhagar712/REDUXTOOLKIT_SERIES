// src/components/UserList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../slices/UserSlice";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const UserList = ({ setEditData }) => {
  const users = useSelector((state) => state.userInfo.list);
  const dispatch = useDispatch();

  const handleDelete = (user) => {
    dispatch(deleteUser(user.id));
    toast.success(`${user.name} deleted`);
  };

  return (
    <div className="space-y-4  shadow">
      {users.length === 0 && <p className="text-red-500">No users found.</p>}
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center gap-4 border p-4 rounded shadow-lg"
        >
          <img
            src={user.image}
            alt={user.name}
            className="w-27 h-27 object-cover rounded-full"
          />
          <div className="flex-1 ">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Phone: {user.phone}</p>
            <div className="flex items-center justify-end gap-5">
              <FaRegEdit
                onClick={() => setEditData(user)}
                className="text-blue-600 cursor-pointer text-2xl"
              />
              <MdDelete
                onClick={() => handleDelete(user)}
                className="text-red-600 cursor-pointer text-2xl"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
