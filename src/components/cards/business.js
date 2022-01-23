import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import "./business_cards.scss";
import { Link } from "react-router-dom";
import { MeasureDistanceFromUser } from "../api/distance";
import default_image from "../../assets/icon/default_image.png";
import default_headshot from "../../assets/influencer/headshot.gif";
import default_poster from "../../assets/influencer/poster.gif";
export default function BusinessCard(props) {
  let { merchant } = props;
  let business_profile =
    (merchant.business_profile && merchant.business_profile[0]) || {};
  let poster =
    (business_profile.poster && business_profile.poster.filelist[0]) ||
    default_image;
  useEffect(() => {
    SelectInfluence(poster);
  }, []);
  const [influence, setInfluence] = useState();
  const SelectInfluence = (data) => {
    setInfluence(data);
  };

  let logo =
    (business_profile.logo && business_profile.logo.filelist[0]) ||
    default_image;
  let url = business_profile.url || merchant.place_id;
  let query = business_profile.url ? `` : `?type=id`;

  let distance = MeasureDistanceFromUser(merchant, props.customer_location);

  return (
    <div className="featured_merchant_container">
      <Row gutter={6} justify="space-around" align="middle">
        <Col span={24} className=" ">
          <Link to={`/site/store/${url}${query}`}>
            <div className="featured_merchant_poster_container">
              <img
                src={influence || poster}
                className="featured_merchant_poster"
                alt={(business_profile.name || merchant.name) + " poster "}
              />
            </div>
          </Link>
          <Link to={`/site/store/${url}${query}`}>
            <div className=" featured_merchant_logo_container text_center margin_top_5">
              <img
                onClick={() => SelectInfluence(poster)}
                src={logo}
                className="featured_merchant_logo"
                alt={(business_profile.name || merchant.name) + " logo "}
              />
              {/* <img
              onClick={() => SelectInfluence(i.kh.poster)}
              src={i.kh.logo}
              className="featured_merchant_logo"
              alt={(business_profile.name || merchant.name) + " logo "}
            /> */}
            </div>
          </Link>

          <Link to={`/site/store/${url}${query}`}>
            <div className="bolded featured_merchant_name ellipsis ">
              {business_profile.name} {distance}
            </div>
          </Link>
          <div className="store_influencer">
            {/* <FA icon="fas fa-camera-retro" title="Sokori Chlo" />{" "} */}
          </div>
        </Col>
      </Row>
    </div>
  );
}
