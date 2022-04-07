import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Avatar } from "antd";
import { read } from "../../../redux/actions/master";
import { MakeList } from "../../../utils/list";

const { Meta } = Card;

export const SicentistDoctors = (props) => {
  console.log('props', props)
  const fetchInitialData = async () => {
    const initialData = await props.read({
      key: "scientists",
      query: "?limit=1000",
      replace: true,
    });
    if(initialData)
      console.log('initialData', initialData)
    //console.log('initialData', initialData)
  };
  useEffect(() => {
    fetchInitialData();
  }, []);

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

  const paul = {
    fullname: "Dr. Paul Alexander",
    title: "Clinical Epidemiology",
    image: "https://substack.com/profile/58916651-dr-paul-alexander",
    image:
      "https://trialsitenews.com/wp-content/uploads/avatars/6335/60a53897bd9e3-bpfull.jpg",
  };

  const StaffCard = (props) => {
    let { fullname, title, image, link } = props;
    return (
      <a target={"_blank"} rel="noreferrer" href={link}>
        <Card
          hoverable
          style={{ width: "100%", height: 'auto' }}
          cover={
            <Avatar
              style={{ width: "100%", height: 'auto' }}
              shape="square"
              src={props.image}
            />
          }
        >
          <Meta title={fullname} description={title} />
        </Card>
      </a>
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
          <Col className="staff_list_container" {...span}>
            <StaffCard {...paul} />
          </Col>
          {props.scientists.map((staff) => {
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

const mapStateToProps = (state) => ({
  scientists: state.master.scientists || [],
});

const mapDispatchToProps = { read };

export default connect(mapStateToProps, mapDispatchToProps)(SicentistDoctors);
