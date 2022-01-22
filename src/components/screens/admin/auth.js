import { Col, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import LoginForm from "./forms/login";
import { login } from "../../../redux/actions/auth";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import GetAuth from "../../admin/forms";
import GetNomenclature from "../../admin/nomenclature";
export const AuthPanel = (props) => {
  let { section } = useParams();
  let span = {
    xs: 18,
    sm: 18,
    md: 12,
    lg: 8,
    xl: 8,
    xxl: 6,
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
            <h1 style={{ textAlign: "center" }}>{GotNomenclature.title}</h1>
            <GotAuth onSubmit={onSubmit} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(AuthPanel);
