import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { read } from "../redux/actions/master";
import { loadUser } from "../redux/actions/auth";
import { connect } from "react-redux";

import Home from "../components/screens/home";
import Search from "../components/screens/news/search";
import News from "../components/screens/news";
import Archives from "../components/screens/archives";
import Websites from "../components/screens/sites";
import Doctors from "../components/screens/doctors";
import About from "../components/screens/about";
import Suggestions from "../components/screens/suggestions";
import AdminPanel from "../components/screens/admin";
import Auth from "../components/screens/admin/auth";

function AppRoute(props) {
  return (
    <div>
      <Routes>
        <Route path="/news/:section" element={<News />} />
        <Route path="/archives/:section" element={<Archives />} />
        <Route path="/websites/:section" element={<Websites />} />
        <Route path="/in-the-news/search/:section" element={<Search />} />
        <Route path="/scientists-doctors/:section" element={<Doctors />} />
        <Route path="/about-us/:section" element={<About />} />
        <Route path="/suggestions/:section" element={<Suggestions />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/admin/:section"
          element={props.isAuthenticated ? <AdminPanel /> : <Auth />}
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => ({
  home_data: state.master.home,
});

const mapDispatchToProps = { read, loadUser };

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);
