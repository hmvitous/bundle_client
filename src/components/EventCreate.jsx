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
  { key: "6", text: "6", value: "6" },
  { key: "7", text: "7", value: "7" },
  { key: "8", text: "8", value: "8" },
  { key: "9", text: "9", value: "9" },
  { key: "10", text: "10", value: "10" },
];
const errorStyle = {
  color: 'red'
}
const EventCreate = () => {
  const [hasErrors, setHasErrors] = useState(false);
  const [category, setCategory] = useState("");
  const [people, setPeople] = useState("");
  const [titleEmpty, setTitleEmpty] = useState("");
  const [createMessage, setCreateMessage] = useState("");
  let error = false;
  const validateForm = (event) => {
    if(!event.target.title.value){
      setTitleEmpty("Cant be empty");
      error = true;
    }
    if(error === false){
     let response = submitEvent(event);
      console.log(response);
      setCreateMessage("Your event has been created");
    }
  }
  const submitEvent = async (event) => {
    if(!hasErrors){
      console.log("made call");
      return await axios.post("/api/events", {
        event: {
          title: event.target.title.value,
          description: event.target.description.value,
          category: category,
          attendees: people,
        },
      });
    }
  };
  return (
    <>
      <Form id="create-form" onSubmit={validateForm}>
  <span style={errorStyle}>{titleEmpty}</span>
        <Form.Field>
          <label>Title</label>
          <input id="title" placeholder="Title" />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea id="description" placeholder="Description" />
        </Form.Field>
        <Form.Select
          name="people"
          fluid
          label="Number of People"
          size="tiny"
          options={peopleAmount}
          placeholder="Max limit 10"
          onChange={(data) => {
            setPeople(data.value);
          }}
        />
        <Form.Select
          name="category"
          fluid
          label="Category"
          size="tiny"
          options={categoryOptions}
          placeholder="Category"
          onChange={(data) => {
            setCategory(data.value);
          }}
        />
        <Button
          id="submit"
          color="blue"
          type="submit"
        >
          submit
        </Button>
      </Form>
          <span>{createMessage}</span>
    </>
  );
};
export default EventCreate;