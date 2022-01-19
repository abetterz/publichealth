import React from "react";
import { connect } from "react-redux";

export const News = (props) => {
  return <div> Reviewing Code and Uploading by: Due: 1/19/2022 - 12:00 pm</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(News);
