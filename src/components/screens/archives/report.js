import { Col, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";

const { TabPane } = Tabs;
export const Report = (props) => {
  return (
    <Row>
      <Col>
        <Tabs tabPosition="left" defaultActiveKey="1">
          <TabPane tab="COVID-19 Status Update" key="1">
            COVID-19 Status Update
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
