import React, { Component } from "react";
// import { useBooleanKnob } from '@stardust-ui/docs-components'
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

export default class SideNavbar extends Component {
  render() {
    return (
    //   <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          inverted
          vertical
          visible
          width="thin"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>

        // <Sidebar.Pusher>
        //   <Segment basic>
            // <Header as="h3">Application Content</Header>
            // <Image src="/images/wireframe/paragraph.png" />
        //   </Segment>
        /* </Sidebar.Pusher> */
    /* //   </Sidebar.Pushable> */
    );
  }
}
