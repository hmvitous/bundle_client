import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

const errorStyle = {
  color: "red",
};
const LoginForm = (props) => {
  const [hasErrors] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [emailEmpty, setEmailEmpty] = useState("");
  const [passwordEmpty, setPasswordEmpty] = useState("");
  const [wrongCredentials, setWrongCredentials] = useState("");
  let error = false;
  const authenticateUser = (user) => {
    if (!user.target.email) {
      setEmailEmpty("email can't be empty");
      error = true;
    }
    if (!user.target.password) {
      setPasswordEmpty("You must provide a password");
      error = true;
    }
    if (!user.target.email.password) {
      setWrongCredentials("Wrong credentials, please try again");
    }
    if (error === false) {
      authenticated(user).then((response) => {
        setLoginMessage(response.data.message);
        props.fetchUser();
      });
    }
  };

  const authenticated = async (user) => {
    if (!hasErrors) {
      console.log("made call");
      return axios.get("/api/users", {
        user: {
          name: user.target.name,
        },
      });
    }
  };

  return (
    <>
      {!loginMessage && (
        <Form id="login-form" onSubmit={authenticateUser}>
          <span style={errorStyle}>
            {wrongCredentials}
            {emailEmpty}
            {passwordEmpty}
          </span>
          <Form.Field>
            <label>Email</label>
            <input name="email" type="email" id="email"></input>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input name="password" type="password" id="password"></input>
          </Form.Field>
          <Button id="submit" color="blue">
            Submit
          </Button>
        </Form>
      )}
      <span id="message">Hi user@mail.com</span>
    </>
  );
};

export default LoginForm;
