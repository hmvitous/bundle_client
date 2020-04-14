import React, { Component } from "react";
import axios from "axios";
import { Button, Icon, List, Placeholder, Image } from "semantic-ui-react";

class EventsList extends Component {
  state = {
    eventsIndex: [],
  };
  async componentDidMount() {
    try {
      const response = await axios.get("/events");
      console.log(response);
      this.setState({
        eventsIndex: response.data.events,
      });
    } catch (error) {}
  }
  render() {
    const { eventsIndex } = this.state;
    const showEvents = eventsIndex.map((event) => {
      return (
        <div id={"event-" + event.id} key={event.id}>
          {/* <h3 id="title">{event.title}</h3>
          <p id="description">{event.description}</p>
          <p id="category">{event.category}</p>
          <p id="location">{event.location}</p> */}

          <Placeholder>
            <Placeholder.Header image>
              <Image src="/images/wireframe/image.png" size="small" />
            </Placeholder.Header>
            <h3 id="title">{event.title}</h3>

            <Placeholder.Paragraph>
              <p id="description">{event.description}</p>
              <p id="category">{event.category}</p>
              <p id="location">{event.location}</p>
            </Placeholder.Paragraph>
          </Placeholder>

          <Button color="facebook">
            <Icon name="facebook" /> Facebook
          </Button>
          <Button color="instagram" attached="right">
            <Icon name="instagram" /> Instagram
          </Button>
          <Button animated="fade">
            <Button.Content visible>Sign-up for a account</Button.Content>
            <Button.Content hidden>Kr 20 a month</Button.Content>
          </Button>

          <List>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>Stockholm</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>
                <a href="mailto:anish.kanswal@gmail.com">
                  anish.kanswal@gmail.com
                </a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="http://www.facebook.com">facebook.com</a>
              </List.Content>
            </List.Item>
          </List>
        </div>
      );
    });
    return <div>{showEvents}</div>;
  }
}
export default EventsList;
