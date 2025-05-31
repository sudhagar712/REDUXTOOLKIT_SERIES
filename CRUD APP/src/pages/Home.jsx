import React from "react";
import UserForm from "../Components/UserForm";
import UserList from "../Components/UserList";

const Home = () => {
  return (
    <div className="flex flex-col homecss md:flex-row  gap-20 ">
      {/* Left side - Form */}
      <div className="md:w-1/2  w-full p-4 rounded">
        <UserForm />
      </div>
      <hr />
      {/* Right side - User Data */}
      <div >
        <UserList />
      </div>
    </div>
  );
};

export default Home;
