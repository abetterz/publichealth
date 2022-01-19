import React from "react";
import { connect } from "react-redux";

export const Home = (props) => {
  return <div> Reviewing Code and Uploading by: Due: 1/20/2022 - 6:00 am</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
