import React, { useState } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import AdminMenu from "./menu";

export const AdminPanel = (props) => {
  const [collapsed, setCollapsed] = useState();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const span_left = {
    collapsed: {
      xs: 2,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 3,
    },
    full: {
      xs: 6,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6,
      xxl: 6,
    },
  };
  const span_right = {
    collapsed: {
      xs: 21,
      sm: 21,
      md: 21,
      lg: 21,
      xl: 21,
      xxl: 21,
    },
    full: {
      xs: 20,
      sm: 20,
      md: 20,
      lg: 18,
      xl: 18,
      xxl: 18,
    },
  };

  let gotSpanLeft = collapsed ? span_left.collapsed : span_left.full;
  let gotSpanRight = collapsed ? span_right.collapsed : span_right.full;
  return (
    <Row gutter={24}>
      <Col span={24}>
        <AdminMenu collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      </Col>
      <Col {...gotSpanRight}>collapsed</Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
