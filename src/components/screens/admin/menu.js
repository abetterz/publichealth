import React from "react";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
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

    return (
      <Menu theme="dark" mode="horizontal">
        {menus.map((item) => (
          <SubMenu
            key={item.key}
            icon={<AppstoreOutlined />}
            title={item.title}
          >
            {item.submenu.map((menu) => (
              <Menu.Item key={menu.key}>{menu.title}</Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    );
  }
}

export default AdminMenu;
