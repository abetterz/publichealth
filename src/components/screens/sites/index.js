import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Avatar } from "antd";
import { read } from "../../../redux/actions/master";
import { MakeList } from "../../../utils/list";

const { Meta } = Card;

export const SicentistDoctors = (props) => {
  const fetchInitialData = async () => {
    await props.read({
      key: "websites",
      replace: true,
    });
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

  const StaffCard = (props) => {
    let { fullname, title, image, link } = props;
    return (
      <a target={"_blank"} rel="noreferrer" href={link}>
        <Card hoverable style={{ width: "100%" }}>
          <div
            className="avatar_card_img"
            style={{
              backgroundImage: `url('${props.image}')`,
              width: "100%",
              height: 200,
            }}
          ></div>

          <Meta title={title} />
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
            <p className="page_header">Websites</p>
          </Col>
        </Row>
        <Row gutter={24}>
          {props.websites.map((staff) => {
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
  websites: state.master.websites || [],
});

const mapDispatchToProps = { read };

export default connect(mapStateToProps, mapDispatchToProps)(SicentistDoctors);
