import React from "react";

const Profile = (props) => {
  console.log("props", props);
  // props destructuring
  const { age, roll, name, favSub, setFavSubject } = props;

  const changeSubJect = () => {
    setFavSubject("Math");
  };
  return (
    <div>
      <h1>Profile Component</h1>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Roll: {roll}</h3>

      <h3>Favorite Subject: {favSub}</h3>
      <button onClick={changeSubJect}>Math</button>
    </div>
  );
};

export default Profile;
