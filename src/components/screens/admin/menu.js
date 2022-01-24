import React from "react";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";

import { FA } from "../../../utils/images";

class AdminMenu extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    const simple_menus = [
      // {
      //   key: "dashboard",
      //   title: "Dashboard",
      //   link: "/admin/dashboard",
      // },
      {
        key: "posts",
        title: "Posts",
        link: "/admin/posts",
      },
      {
        key: "scientists",
        title: "scientists & doctors",
        link: "/admin/scientists",
      },
      {
        key: "websites",
        title: "Websites",
        link: "/admin/websites",
      },
      {
        key: "users",
        title: "Users",
        link: "/admin/users",
      },
    ];

    return (
      <Menu onClick={this.props.handleClickMenu} theme="dark" mode="horizontal">
        {simple_menus.map((item) => (
          <Menu.Item key={item.key}>
            <Link to={item.link}> {item.title} </Link>{" "}
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default AdminMenu;
