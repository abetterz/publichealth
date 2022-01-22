import React from "react";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";

import { FA } from "../../../utils/images";

const { SubMenu } = Menu;

class AdminMenu extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    const menus = [
      {
        key: "settings",
        title: "Settings",
        submenu: [
          {
            key: "users",
            title: "Users",
            link: "/admin/users",
          },
        ],
      },
      {
        key: "contents",
        title: "Contents",
        submenu: [
          {
            key: "posts",
            title: "Posts",
            link: "/admin/posts",
          },
          {
            key: "scientists",
            title: "Scientist & Doctors",
            link: "/admin/scientists",
          },
          {
            key: "websites",
            title: "Websites",
            link: "/admin/websites",
          },
        ],
      },
    ];

    const simple_menus = [
      {
        key: "dashboard",
        title: "Dashboard",
        link: "/admin/dashboard",
      },
      {
        key: "posts",
        title: "Posts",
        link: "/admin/posts",
      },
      {
        key: "scientists",
        title: "Scientist & Doctors",
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
      <Menu theme="dark" mode="horizontal">
        {/* {menus.map((item) => (
          <SubMenu
            key={item.key}
            icon={<AppstoreOutlined />}
            title={item.title}
          >
            {item.submenu.map((menu) => (
              <Menu.Item key={menu.key}>{menu.title}</Menu.Item>
            ))}
          </SubMenu>
        ))} */}

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
