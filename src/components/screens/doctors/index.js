import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card } from "antd";

const { Meta } = Card;

export const SicentistDoctors = (props) => {
  const data = [
    {
      description: "NYC/NJ Physician MSKCCDr Been",
      src: "https://www.drbeen.com/wp-content/uploads/2019/11/founder-img.png",
    },
  ];
  let span = {
    xs: 24,
    sm: 8,
    md: 6,
    lg: 4,
    xl: 4,
    xxl: 4,
  };

  const StaffCard = (props) => {
    let { title, src, description } = props;
    return (
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={<img alt="example" src={src} className="staff_images" />}
      >
        <Meta title={title} description={description} />
      </Card>
    );
  };
  return (
    <Row>
      <Col span={24}>
        <Row
          className="page_header_container"
          justify="space-around"
          align="middle"
        >
          <Col>
            <p className="page_header">Scientists and Doctors</p>
          </Col>
        </Row>
        <Row gutter={24}>
          {data.map((staff) => {
            return (
              <Col className="staff_list_container" {...span}>
                <StaffCard {...staff} />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SicentistDoctors);
