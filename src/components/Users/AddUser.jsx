import React, { useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")
  
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge)
    setEnteredAge("")
    setEnteredUsername("")
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={userNameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
