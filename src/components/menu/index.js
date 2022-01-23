import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

class MainMenu extends React.Component {
  state = {
    current: "mail",
  };

  render() {
    const { current } = this.state;
    const { handleClick } = this.props;

    const menus = [
      {
        link: "/",
        title: "Home",
        key: "home",
      },
      {
        link: "news/index",
        title: "News",
        key: "news",
      },
      {
        link: "archives/index",
        key: "archives",
        title: "Archives",
      },
      {
        link: "websites/index",
        key: "websites",
        title: "Websites",
      },
      {
        link: "scientists-doctors/index",
        key: "scientist",
        title: "Scientist & Doctors",
      },
      {
        link: "about-us/index",
        key: "about",
        title: "About Us",
      },
      {
        link: "suggestions/index",
        key: "suggestions",
        title: "Suggestions",
      },
    ];
    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {menus.map((item) => {
          return (
            <Menu.Item className="main_menu_item" key={item.key}>
              <Link to={item.link}>{item.title}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

export default MainMenu;
