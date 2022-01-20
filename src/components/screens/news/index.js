import React from "react";
import { connect } from "react-redux";

export const News = (props) => {
  return (
    <div>
      <div>New: Reviewing Code and Uploading by: Due: 1/21/2022 - 12:00 am</div>

      <div>
        Old: Reviewing Code and Uploading by: Due: 1/19/2022 - 12:00 pm{" "}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(News);
