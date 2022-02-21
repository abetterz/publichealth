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
        link: "/about",
        key: "about",
        title: "About Us",
        submenu: [
          {
            link: "/about",
            key: "about",
            title: "About Us",
          },
          {
            link: "/kris-kobach",
            title: "Kris W. Kobach, General Counsel",
            key: "kris-kobach",
          },
          {
            link: "/contact",
            title: "Contact Us",
            key: "contact",
          },
        ],
      },
      {
        link: "/news",
        title: "In The News",
        key: "news",
      },
      {
        link: "/local-participation",
        key: "local-participation",
        title: "Local Participation",
        submenu: [
          {
            link: "/three-steps-everyone-can-take-to-restore-freedom-to-america",
            title: "Three Steps Everyone Can Take",
            key: "three_steps_everyone_can_take",
          },
          {
            link: "/reviving-the-gop",
            title: "Reviving the GOP",
            key: "reviving-the-gop",
          },
        ],
      },
      {
        link: "/legislation",
        key: "legislation",
        title: "State Legislation",
        submenu: [
          {
            link: "/legislation",
            title: "Overview of Our Legislation",
            key: "legislation",
          },
          {
            link: "/model-legislation",
            title: "Model Legislation",
            key: "model-legislation",
          },
          {
            link: "/state-legislation",
            title: "Introduced Legislation",
            key: "state-legislation",
          },
          {
            link: "/states",
            title: "The Legislative Schedule for the 50 State Legislatures",
            key: "states",
          },
        ],
      },
      {
        link: "/illegal-immigration",
        key: "illegal-immigration",
        title: "Illegal Immigration",
        submenu: [
          {
            link: "/10th-amendment",
            title: "10th Amendment Response",
            key: "10th-amendment",
          },
          {
            link: "/enforce-state-law",
            title: "Enforce State Law",
            key: "enforce-state-law",
          },
          {
            link: "/litigation",
            title: "Litigation",
            key: "litigation",
          },
        ],
      },
      {
        link: "/patriots",
        key: "patriots",
        title: "Patriots, Partners, and Allies",
      },
      {
        link: "/tactics",
        key: "tactics",
        title: "Tactics",
      },
    ];
    return (
      <Menu onClick={handleClick} mode="horizontal">
        {menus.map((item) => {
          if (item.submenu) {
            // <Menu.Item className="main_menu_item" key={item.key}>
            //   <Link to={item.link}>{item.title}</Link>
            // </Menu.Item>

            return (
              <SubMenu
                className="main_menu_item"
                key={item.key}
                title={item.title}
              >
                {item.submenu.map((sub) => (
                  <Menu.Item className="main_menu_item" key={sub.key}>
                    <Link to={sub.link}>{sub.title}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item className="main_menu_item" key={item.key}>
                <Link to={item.link}>{item.title}</Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    );
  }
}

export default MainMenu;
