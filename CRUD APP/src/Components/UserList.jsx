import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../slices/UserSlice";

const UserList = () => {
  const users = useSelector((state) => state.userInfo.list);
  const dispatch = useDispatch()


 

  return (
    <div>
      <div className=" w-full rounded ">
        <h1 className="text-4xl font-bold  text-green-500">
          User Data <span className="text-black">Collections</span>
        </h1>
        {users.length > 0 ? (
          <div className="space-y-4 ">
            {users.map((user) => (
              <div key={user.id} className="  rounded flex items-center gap-10">
                {user.image && (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-25 h-25 object-cover border rounded-full"
                  />
                )}
                <div className="bg-gray-300 listcontentcss ">
                  <h2 className="text-xl text-blue-500  font-extrabold">
                    {user.name}
                  </h2>
                  <p className="text-xs font-bold">Email: {user.email}</p>
                  <p className="text-xs font-bold">Age: {user.age}</p>
                  <p className="text-xs font-bold">Phone: {user.phone}</p>

                  <div className="flex justify-between items-center gap-x-5">
                    <FaRegEdit className="text-blue-500 text-xl" />
                    <MdDelete
                      onClick={() => dispatch(deleteUser(user.id))}
                      className="text-red-500 text-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-3xl font-bold  text-red-500">
            No User
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
