import { useState } from "react";


function UseStatesObj() {
    // Declare a state variable named 'userInfo' with an initial value as an object
  const [userInfo, setUserInfo] = useState({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  });

  // Function to update the 'userInfo' state
  const updateUserInfo = () => {
    // Create a new object with updated values
    const updatedInfo = {
      ...userInfo,
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice.smith@example.com',
    };
    setUserInfo(updatedInfo);
  };

  return (
    <div className="text-center bg-cyan-300 my-8 py-4 text-xl space-y-4">
      <h1 className="text-2xl font-bold">User Information</h1>
      <p>ID: {userInfo.id}</p>
      <p>First Name: {userInfo.firstName}</p>
      <p>Last Name: {userInfo.lastName}</p>
      <p>Email: {userInfo.email}</p>
      <button onClick={updateUserInfo} className="btn btn-secondary">Update User Info</button>
    </div>
  );
}
  

export default UseStatesObj;