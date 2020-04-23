import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import  auth  from '../modules/auth'

const LoginForm = (props) => {
  const dispatch = useDispatch()

  const authenticateUser = async (event) => {
    event.preventDefault()
    try {
      let response = await auth.signIn(event.target.email.value, event.target.password.value)
      
      dispatch({
        type: "AUTHENTICATE",
        payload: {
          authenticated: true,
          userEmail: response.data.email,
        }
      });

    } catch(error) {
      debugger;
    }
  }

  return (
    <>
      <Form id="login-form" onSubmit={authenticateUser}>
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
    </>
  );
};
export default LoginForm;