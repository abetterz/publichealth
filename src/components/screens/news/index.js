import React from "react";
import { connect } from "react-redux";

export const News = (props) => {
  return (
    <div>
      <div>New: Reviewing Code and Uploading by: Due: 1/20/2022 - 6:00 am</div>
      <div>
        Update Justification: developers nap, recharge, and got back to it!
      </div>
      <div>
        Old: Reviewing Code and Uploading by: Due: 1/19/2022 - 12:00 pm{" "}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(News);
