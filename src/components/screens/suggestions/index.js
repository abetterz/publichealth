import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card } from "antd";
import SuggestionForm from "./form";

const { Meta } = Card;

export const Suggestion = (props) => {
  const data = [
    {
      title: "America’s Frontline Doctors",
      description: "https://americasfrontlinedoctors.org",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjz5qshMCUaHeexi_tF_amRCquhTPU0UwVzn7daLKE-oJ5N4WhLZFMtgxHs9-_fXuwpc&usqp=CAU",
    },
  ];
  let span_left = {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 16,
    xl: 16,
    xxl: 16,
  };
  let span_right = {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 8,
    xl: 8,
    xxl: 8,
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
            <p className="page_header">Suggestions</p>
          </Col>
        </Row>
        <Row gutter={48}>
          <Col {...span_left}>
            <SuggestionForm />
          </Col>
          <Col className="about_us_em" {...span_right}>
            <p>
              todo: add suggestion message, placeholder: PublicHealth.news
              aggregates as much publicly available information as we can find
              to help people make a judgment about their health needs during
              this pandemic. Dr. Paul E. Alexander holds a PhD (graduate
              education from University of Toronto in epidemiology, Oxford in
              evidence based medicine, and McMaster in evidence based medicine
              and research methods, expertise in bioterrorism/biowarfare).
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Suggestion);
