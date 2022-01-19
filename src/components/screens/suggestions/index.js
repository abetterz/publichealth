import React from "react";
import { connect } from "react-redux";

export const Suggestions = (props) => {
  return <div> Reviewing Code and Uploading by: Due: 1/20/2022 - 12:00 pm</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);
