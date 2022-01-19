import React from "react";
import { connect } from "react-redux";

export const Home = (props) => {
  return <div> Due: 1/19/2022 - 3pm</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
