import React, { Component } from "react";
import axios from "axios";
import { List, Placeholder, Image } from "semantic-ui-react";


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
          <List>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>Stockholm</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>
                <a href="mailto:anish.kanswal@gmail.com">anish</a>
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
