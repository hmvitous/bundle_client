import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import axios from "axios";

const categoryOptions = [
  { key: "s", text: "Sports", value: "sports" },
  { key: "c", text: "Casual", value: "casual" },
  { key: "o", text: "Outdoors", value: "outdoors" },
  { key: "g", text: "Games", value: "games" },
  { key: "f", text: "Food", value: "food" },
];

const peopleAmount = [
  { key: "1", text: "1", value: "1" },
  { key: "2", text: "2", value: "2" },
  { key: "3", text: "3", value: "3" },
  { key: "4", text: "4", value: "4" },
  { key: "5", text: "5", value: "5" },
];

const EventCreate = () => {
  const [category, setCategory] = useState("");
  const [people, setPeople] = useState("");

  const submitEvent = async (event) => {
    const response = await axios.post("/events", {
      event: {
        title: event.target.title.value,
        description: event.target.description.value,
        category: category,
        attendees: people,
      },
    });
  };

  return (
    <>
      <Form id="create-form" onSubmit={submitEvent}>
        <Form.Field>
          <label>Title</label>
          <input id="title" placeholder="Title" />
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <input id="description" placeholder="Description" />
        </Form.Field>

        <Form.Select
          name="people"
          fluid
          label="Number of People"
          options={peopleAmount}
          placeholder="Max limit 10"
          onChange={(event, data) => {
            setPeople(data.value);
          }}
        />

        <Form.Select
          name="category"
          id="category"
          fluid
          label="Category"
          debugger
          options={categoryOptions}
          placeholder="Category"
          onChange={(event, data) => {
            setCategory(data.value);
          }}
        />

        <Button type="submit">Submit</Button>
      </Form>

      <Message className="message">"Your event has been created"</Message>
    </>
  );
};

export default EventCreate;
