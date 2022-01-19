import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class MainMenu extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;

    const menus = [
      {
        key: "news",
        title: "News",
      },
      {
        key: "archives",
        title: "Archives",
      },
      {
        key: "webites",
        title: "Websites",
      },
      {
        key: "scientist",
        title: "Scientist & Doctors",
      },
      {
        key: "about",
        title: "About Us",
      },
      {
        key: "suggestions",
        title: "Suggestions",
      },
    ];
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        {menus.map((item) => {
          return (
            <Menu.Item className="main_menu_item" key={item.key}>
              {item.title}
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

export default MainMenu;
