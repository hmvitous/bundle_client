import React from "react";
import { Button, Form } from "semantic-ui-react";

const EventCreate = () => {
  return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <input placeholder="Title" />
      </Form.Field>
      
      <Form.Field>
        <label>Description</label>
        <input placeholder="Description" />
      </Form.Field>
      <Form.Select
            fluid
            label='Category'
            options={options}
            placeholder='Category'
          />
      
      <Button type="submit">Create Event</Button>
    </Form>
  );
};

export default EventCreate;
