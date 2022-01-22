import React from "react";
import { connect } from "react-redux";

export const AdminPanel = (props) => {
  return <div>Admin Panel</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
