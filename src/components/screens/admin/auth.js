import { Col, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import LoginForm from "./forms/login";
import { login, register } from "../../../redux/actions/auth";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import GetAuth from "../../admin/forms";
import GetNomenclature from "../../admin/nomenclature";
export const AuthPanel = (props) => {
  let { section } = useParams();
  let span = {
    xs: 18,
    sm: 18,
    md: 14,
    lg: 10,
    xl: 10,
    xxl: 8,
  };

  const onSubmit = async (payload) => {
    let getFunc = props[section];
    let res =
      getFunc &&
      (await getFunc({
        key: section,
        payload,
      }));
  };

  const GotAuth = GetAuth(section);
  const GotNomenclature = GetNomenclature(section);
  return (
    <Row>
      <Col
        style={{ minHeight: window.innerHeight - 500 }}
        className="container_admin_form"
        span={24}
      >
        <Row justify="space-around" align="middle">
          {section === "login"}
          <Col {...span}>
            <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
              {GotNomenclature.title}
            </h1>
            <GotAuth onSubmit={onSubmit} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { login, register };

export default connect(mapStateToProps, mapDispatchToProps)(AuthPanel);
