import React from "react";
import { Menu } from "semantic-ui-react";

export const Categories = () => {
  return (
    <div>
      <Menu color="violet" inverted pointing vertical>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>
    </div>
  );
};
