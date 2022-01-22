import { Col, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import LoginForm from "./forms/login";
import { login } from "../../../redux/actions/auth";

export const AuthPanel = (props) => {
  let span = {
    xs: 18,
    sm: 18,
    md: 12,
    lg: 8,
    xl: 8,
    xxl: 6,
  };

  const onSubmit = async (payload) => {
    let res = await props.login({
      key: "login",
      payload,
    });
  };
  return (
    <Row>
      <Col
        style={{ minHeight: window.innerHeight - 500 }}
        className="container_admin_form"
        span={24}
      >
        <Row justify="space-around" align="middle">
          <Col {...span}>
            <h1 style={{ textAlign: "center" }}>SIGN IN</h1>
            <LoginForm onSubmit={onSubmit} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(AuthPanel);
