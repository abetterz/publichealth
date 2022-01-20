import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card } from "antd";

const { Meta } = Card;

export const Websites = (props) => {
  const data = [
    {
      title: "America’s Frontline Doctors",
      description: "https://americasfrontlinedoctors.org",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjz5qshMCUaHeexi_tF_amRCquhTPU0UwVzn7daLKE-oJ5N4WhLZFMtgxHs9-_fXuwpc&usqp=CAU",
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
            <p className="page_header">Websites & Links</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Websites);
