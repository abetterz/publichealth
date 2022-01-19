import React from "react";
import { connect } from "react-redux";

export const News = (props) => {
  return <div> Due: 1/19/2022 - 11am</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(News);
