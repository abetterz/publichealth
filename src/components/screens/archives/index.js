import React from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import GetPage from "./config";
import { Col, Row } from "antd";

const Index = (props) => {
  let { section } = useParams();

  const GotPage = GetPage(section);
  return (
    <Row>
      <Col span={24}>
        <GotPage />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
