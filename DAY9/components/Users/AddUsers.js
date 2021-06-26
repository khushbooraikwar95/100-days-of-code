import React, { useState } from "react";
import { render } from "react-dom";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError]=useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age(non-empty values)'
      });
      return;
    }
    if(+enteredAge < 1){
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age(>0)'
      });
      return;
    }
    if(+enteredAge > 110){
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangehandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangehandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <Wrapper>
   {error && (<ErrorModel
    title={error.title}
     message={error.message}
      onConfirm={errorHandler}
      />
   )}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"
         value={enteredUsername} 
         onChange={usernameChangehandler} 
         />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"
         value={enteredAge} 
         onChange={ageChangehandler}
          />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;
