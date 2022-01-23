import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import AdminMenu from "./menu";
import GetNomenclature from "../../admin/nomenclature";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import GetForm from "../../admin/forms";
import { create } from "../../../redux/actions/master";

export const AdminPanel = (props) => {
  const [collapsed, setCollapsed] = useState();
  const [loading, setLoading] = useState();
  let { section } = useParams();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const span_left = {
    xs: 0,
    sm: 0,
    md: 12,
    lg: 10,
    xl: 8,
    xxl: 8,
  };
  const span_right = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 14,
    xl: 16,
    xxl: 16,
  };

  let noauth = ["login", "register"];
  console.log(section, "testing_section");
  if (props.isAuthenticated) {
    let yes = noauth.includes(section);
    if (yes) {
      section = "posts";
    }
  }

  let { title } = GetNomenclature(section, props.isAuthenticated);
  const GotForm = GetForm(section, props.isAuthenticated);

  const onSubmit = async (payload) => {
    setLoading(true);
    let res = await props.create({
      payload,
      key: section,
      replace: true,
    });

    setLoading(false);

    return res;
  };

  return (
    <Row gutter={24}>
      <Col className="admin_container" span={24}>
        <AdminMenu collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      </Col>
      <Col className="admin_title" span={24}>
        <h1>{title}</h1>
      </Col>
      <Col className="admin_title" span={24}>
        <Row gutter={24}>
          <Col {...span_left}>
            <GotForm loading={loading} onSubmit={onSubmit} />
          </Col>
          <Col {...span_right}>List</Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { create };

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
