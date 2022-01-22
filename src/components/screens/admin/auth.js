import { Col, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import LoginForm from "./forms/login";

export const AuthPanel = (props) => {
  let span = {
    xs: 18,
    sm: 18,
    md: 12,
    lg: 8,
    xl: 8,
    xxl: 6,
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
            <LoginForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPanel);
