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
        submenu: [
          // {
          //   link: "archives/reports",
          //   title: "Reports",
          //   key: "reports",
          // },
          {
            link: "archives/video_archives",
            title: "Video Archives",
            key: "video_archives",
          },
          // {
          //   link: "archives/covid_boot_camp",
          //   title: "COVID Boot Camp",
          //   key: "covid_boot_camp",
          // },
          // {
          //   link: "archives/bootcamp_for_parents",
          //   title: "Boot Camp for Parents",
          //   key: "bootcamp_for_parents",
          // },
          {
            link: "archives/scientific_studies",
            title: "Scientific Studies",
            key: "scientific_studies",
          },
        ],
      },
      {
        link: "websites/index",
        key: "websites",
        title: "Websites",
      },
      {
        link: "scientists-doctors/index",
        key: "scientist",
        title: "Scientists & Doctors",
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
