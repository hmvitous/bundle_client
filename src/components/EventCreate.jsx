import React from "react";
import { Button, Form, Message } from "semantic-ui-react";

const options = [
  { key: "s", text: "Sports", value: "sports" },
  { key: "c", text: "Casual", value: "casual" },
  { key: "o", text: "Outdoors", value: "outdoors" },
  { key: "g", text: "Games", value: "games" },
  { key: "f", text: "Food", value: "food" },
];

const EventCreate = () => {
  return (
    <>
      <Form id="create-form">
        <Form.Field>
          <label>Title</label>
          <input id="title" placeholder="Title" />
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <input id="description" placeholder="Description" />
        </Form.Field>
        {/* <Form.Field>
        <label>Number Of People</label>
        <input id="number of people" placeholder="Max limit 10" />
      </Form.Field> */}
        <Form.Select
          fluid
          label="Number of People"
          options={options}
          placeholder="Max limit 10"
        />
        <Form.Select
          id="category"
          fluid
          label="Category"
          debugger
          options={options}
          placeholder="Category"
        />
        <Button type="submit">Create Event</Button>
      </Form>
      <Message className="message">Your event has been created</Message>
    </>
  );
};

export default EventCreate;
