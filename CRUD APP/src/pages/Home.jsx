import React, { useState } from "react";
import UserForm from "../Components/UserForm";
import UserList from "../Components/UserList";

const Home = () => {
  const [editData, setEditData] = useState(null);


  return (
    <div className="flex flex-col homecss md:flex-row  gap-10 ">
      {/* Left side - Form */}
      <div className="md:w-1/2  w-full p-4 rounded">
        <h1 className="text-green-500 font-bold text-2xl">
          User <span className="text-black"> Management-CRUD</span>
        </h1>
        <UserForm editData={editData} setEditData={setEditData} />
      </div>
      <hr />
      {/* Right side - User Data */}
      <div>
        <h1 className="text-green-500 font-bold text-2xl ">
          User <span className="text-black">Details</span>
        </h1>
         <br />
        <UserList setEditData={setEditData} />
      </div>
    </div>
  );
};

export default Home;
