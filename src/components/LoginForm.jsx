import React from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

const errorStyle = {
  color: "red",
};

const LoginForm = ({ submitFormHandler }) => {
  return (
    <form onSubmit={submitFormHandler} id="login">
      <label>Email</label>
      <input name="email" type="email" id="email"></input>

      <label>Password</label>
      <input name="password" type="password" id="password"></input>

      <button id="submit">Submit</button>
    </form>
  );
};

const LoginForm = (login) => {
  return axios.get("/api/users", {
    user: {
      name: user.target.name.value,
    }
  });
}

return (
  <>
    {!loginMessage && ( 
      <Form id="login" onSubmit={authenticateUser}>
        <span style={errorStyle}>
          {invalidCredentials}
        </span>
        <Form.Field>
          <label>Email</label>
          <input name="email" type="email" id="email"></input>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" type="password" id="password"></input>
        </Form.Field>
        <Button id="submit" color="blue">Submit</Button>
      </Form>
    )}
    <span id="loginMessage">{loginMessage}</span>
  </>
  
)

export default LoginForm;