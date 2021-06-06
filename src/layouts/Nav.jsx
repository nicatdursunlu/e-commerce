import React from "react";
import { Button, Menu, Container } from "semantic-ui-react";

import { CartSummary } from "./CartSummary";

export const Nav = () => {
  return (
    <div>
      <Menu inverted fixed="top" color="pink">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            <Menu.Item>
              <Button color="green">Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
};
