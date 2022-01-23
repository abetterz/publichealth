import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Input } from "antd";
import logo from "../../assets/logo.png";
import logo_white from "../../assets/logo_white.png";
import MainMenu from "../menu";
import { FA } from "../../utils/images";
import AppRoute from "../../app/route";
import { Link } from "react-router-dom";
import { read } from "../../redux/actions/master";
import { loadUser, logout } from "../../redux/actions/auth";
import { Menu } from "antd";

const Index = (props) => {
  const initialFetch = async () => {
    await props.loadUser();
  };

  useEffect(() => {
    initialFetch();
  }, []);

  const social_media = [
    {
      icon: "fas fa-baseball",
      id: "facebook",
    },
    {
      icon: "fab instagram",
      id: "instagram",
    },
    {
      icon: "fab twitter",
      id: "twitter",
    },
  ];

  const menus = [
    {
      key: "news",
      title: "News",
      link: "/news",
    },
    {
      key: "archives",
      title: "Archives",
      link: "/archives",
    },
    {
      key: "webites",
      title: "Websites",
      link: "/webites",
    },
    {
      key: "scientist",
      title: "Scientist & Doctors",
      link: "/scientist",
    },
    {
      key: "about",
      title: "About Us",
      link: "/about",
    },
    {
      key: "suggestions",
      title: "Suggestions",
      link: "/suggestions",
    },
  ];

  const news = [
    {
      title:
        " Despite CDC Director Walensky Obtaining Media Training Lessons – Democrats Now Calling for Her Replacement",
      date: "January 18, 2022 at 8:15am",
      link: "https://www.thegatewaypundit.com/2022/01/despite-cdc-director-walensky-obtaining-media-training-lessons-democrats-now-calling-replacement/",
    },
    {
      title:
        "China Cancels Olympic Ticket Sales After Omicron Cases Found in Beijing",
      date: "January 17, 2022 at 8:15am",
      link: "https://www.theepochtimes.com/china-cancels-olympic-ticket-sales-after-omicron-cases-found-in-beijing_4218703.html?utm_source=uschinanoe&utm_campaign=uschina-2022-01-18&utm_medium=email&est=daUbS0rhB8tc6L2EKZByIImJFvt5ZcdCFpj%2Fjw1%2B1mV8KybKCz5FK4wIXtJjKH3h",
    },
  ];

  let footer_span = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 8,
    xxl: 8,
  };
  let footer_far_span = {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 8,
    xxl: 8,
  };
  let footer_article = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 24,
    xxl: 24,
  };

  let span = {
    xs: 22,
    sm: 20,
    md: 20,
    lg: 20,
    xl: 18,
    xxl: 18,
  };

  const top_menus = [
    {
      title: "Login",
      key: "contributor",
      icon: "far fa-edit",
      link: "/admin/login",
    },
    {
      title: "Register",
      key: "register",
      icon: "fas fa-lock",
      link: "/admin/register",
    },
  ];

  console.log(props, "testing_props_here");

  return (
    <Row justify="center" align="top">
      <Col className="top_navigation" span={24}>
        <Row justify="center" align="top">
          <Col {...span} className="">
            {!props.isAuthenticated && (
              <Menu
                inlineCollapsed={false}
                style={{ width: "100%", float: "right" }}
                theme="dark"
                mode="horizontal"
              >
                {top_menus &&
                  top_menus.map((item) => {
                    return (
                      <Menu.Item key={item.key}>
                        <Link to={item.link}>
                          <FA icon={item.icon} title={item.title} />
                        </Link>
                      </Menu.Item>
                    );
                  })}
              </Menu>
            )}
            {props.isAuthenticated && (
              <Menu
                inlineCollapsed={false}
                style={{ width: "100%", float: "right" }}
                theme="dark"
                mode="horizontal"
              >
                <Menu.Item key={"admin"}>
                  <Link to={"/admin/dashboard"}>
                    <FA icon={"fas fa-techometer-alt"} title={"Admin"} />
                  </Link>
                </Menu.Item>

                <Menu.Item onClick={props.logout} key={"logout"}>
                  <FA icon={"fas fa-sign-out-alt"} title={"Sign Out"} />
                </Menu.Item>
              </Menu>
            )}
          </Col>
        </Row>
      </Col>

      <Col {...span} className="app">
        <Row>
          <Col className="header" span={24}>
            <Row justify="space-around" align="middle">
              <Col span={24}>
                <Link to="/">
                  <img
                    src={logo}
                    className="public_health_logo"
                    alt="public health logo"
                  />
                </Link>
              </Col>
              <Col span={24}>
                <Row>
                  <Col className="main_menu" span={18}>
                    <MainMenu />
                  </Col>
                  <Col span={6} className="text_right">
                    <Input.Search />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <AppRoute {...props} />
          </Col>
        </Row>
      </Col>
      <Col span={24} className="footer_container">
        <Row justify="center" align="top">
          {/* container start */}
          <Col {...span} className="app">
            <Row gutter={24}>
              <Col style={{ marginBottom: 30 }} {...footer_span}>
                <img
                  src={logo_white}
                  className="footer_logo"
                  alt="public health footer logo"
                />
                <div>
                  <p>
                    PublicHealth.news aggregates as much publicly available
                    information as we can find to help people make a judgment
                    about their health needs during this pandemic.
                  </p>
                </div>
                <div>
                  <p className="footer_title">Follow Us</p>
                  {social_media.map((item) => (
                    <div className="footer_social_media_icon">
                      <FA icon={item.icon} />
                    </div>
                  ))}
                </div>
              </Col>
              <Col style={{ marginBottom: 30 }} {...footer_span}>
                <p className="footer_title">Browse by Sections</p>
                <Row gutter={12}>
                  {menus.map((item) => (
                    <Col span={12} className="footer_menu">
                      <a href={item.link}>
                        <p className="footer_menu_title"> {item.title}</p>{" "}
                      </a>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col {...footer_far_span}>
                <p className="footer_title">Recent News</p>
                <Row>
                  {news.map((item) => {
                    return (
                      <Col {...footer_article}>
                        <a href={item.link}>
                          <div className="recent_news_container">
                            <p className="recent_news_title">{item.title}</p>
                            <FA icon={"far fa-clock"} title={item.date} />
                          </div>
                        </a>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
              <Col>2022 &copy; PublicHealth.News - Freedom From Pain</Col>
            </Row>
          </Col>
          {/* container end */}
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  home_data: state.master.home,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { read, loadUser, logout };

export default connect(mapStateToProps, mapDispatchToProps)(Index);
