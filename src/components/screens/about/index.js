import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card } from "antd";
import logo from '../../../assets/logo.png';

const { Meta } = Card;

export const About = (props) => {
  let credit = {
    xs: 10,
    sm: 10,
    md: 10,
    lg: 10,
    xl: 10,
    xxl: 10,
  };
  let credit_small = {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24,
    xxl: 24,
  };
  let left_span = {
    xs: 24,
    sm: 24,
    md: 14,
    lg: 14,
    xl: 10,
    xxl: 12,
  };

  let right_span = {
    xs: 30,
    sm: 30,
    md: 30,
    lg: 30,
    xl: 12,
    xxl: 12,
  };

  const StaffCard = (props) => {
    let { title, src, description } = props;
    return (
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={
          <img
            alt="example"
            src={logo}
          />
        }
      >
      </Card>
    );
  };
  return (
    <Row>
      <Col span={30}>
        <Row
          className="page_header_container"
          justify="space-around"
          align="middle"
        >
          <Col>
            <p className="page_header">About Us</p>
          </Col>
        </Row>
        <Row gutter={60}>
          <Col className="" {...credit}>
            <StaffCard />
          </Col>
          {/* <Col className="about_us_container" {...left_span}>
            <h2>Science Advisor: Dr. Paul Elias Alexander</h2>
            <p>
              Dr. Paul E. Alexander holds a PhD (graduate education from
              University of Toronto in epidemiology, Oxford in evidence based
              medicine, and McMaster in evidence based medicine and research
              methods, expertise in bioterrorism/biowarfare).{" "}
            </p>
            <p>
              He has experience in the teaching clinical epidemiology,
              evidence-based medicine, and research methodology. Dr. Alexander
              is a former Assistant Professor at McMaster University in
              evidence-based medicine and research methods; former COVID
              Pandemic evidence-synthesis consultant advisor to WHO-PAHO
              Washington, DC (2020) and former senior advisor to COVID Pandemic
              policy in Health and Human Services (HHS) Washington, DC (advisor
              to the A Secretary), US government/Trump administration;
              worked/appointed in 2008 at WHO as a regional
              specialist/epidemiologist in Europe’s Regional office Denmark
              (working with nations of Russia, Poland, Ukraine, Turkey), worked
              for the government of Canada as an epidemiologist for 12 years,
              appointed as the Canadian in-field epidemiologist (2002-2004) as
              part of an international CIDA funded, Health Canada executed
              project on TB/HIV co-infection and MDR-TB control (involving
              India, Pakistan, Nepal, Sri Lanka, Bangladesh, Bhutan, Maldives,
              posted to Kathmandu); employed from 2017 to 2019 at Infectious
              Diseases Society of America (IDSA) Virginia USA as the evidence
              synthesis meta-analysis systematic review guideline development
              officer; currently a COVID-19 consultant researcher in the US-C19
              research group; advocate for early outpatient treatment for
              COVID-19 and proper surveillance (critical event assessment) of
              COVID-19 injection adverse effects/deaths; strong advocate against
              the COVID-19 vaccination of children
            </p>
          </Col> */}

          <Col className="about_us_em" {...right_span}>
            
            <p>
              PublicHealth.news aggregates as much publicly available
              information as we can find to help people make a judgment about
              their health needs during this pandemic.
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
