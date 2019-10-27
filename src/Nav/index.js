import React, { Component } from "react";

import { Menu, Segment } from "semantic-ui-react";

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="boats"
            active={activeItem === "boats"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="waypoints"
            active={activeItem === "waypoints"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src="/images/wireframe/media-paragraph.png" />
        </Segment>
      </div>
    );
  }
}
