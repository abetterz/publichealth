import React, { useState, useRef } from "react";
import { Row, Col, Input, Button } from "antd";
import AdminMenu from "./menu";
import GetNomenclature from "../../admin/nomenclature";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import GetForm from "../../admin/forms";
import { connect } from "react-redux";
import { create, drop, read } from "../../../redux/actions/master";
import GenerateTable from "../../generator/lists/posts";
import GetLists from "../../generator/lists";
import { AudioOutlined } from "@ant-design/icons";
import { FA } from "../../../utils/product";
import GenerateForm from "../admin/forms";

export const AdminPanel = (props) => {
  const [collapsed, setCollapsed] = useState();
  const [loading, setLoading] = useState();
  const [searchEntry, setSearchEntry] = useState("");

  const [initialValues, setInitialValues] = useState({});
  let { section } = useParams();
  const targetRef = useRef();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const span_left = {
    xs: 0,
    sm: 0,
    md: 12,
    lg: 10,
    xl: 8,
    xxl: 8,
  };
  const span_right = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 14,
    xl: 16,
    xxl: 16,
  };

  let noauth = ["login", "register"];
  if (props.isAuthenticated) {
    let yes = noauth.includes(section);
    if (yes) {
      section = "posts";
    }
  }

  let { title } = GetNomenclature(section, props.isAuthenticated);

  const onSubmit = async (payload, isEdit) => {
    setLoading(true);
    let res;

    console.log(payload, "GetNomenclature");

    if (isEdit) {
      res = await props.create({
        payload,
        key: section,
        params: ["update"],
        update_state: true,
        update: true,
      });
    } else {
      res = await props.create({
        payload,
        key: section,
        params: ["create"],
        update_state: true,
        update: true,
      });
    }

    setLoading(false);

    return res;
  };

  const GotList = GetLists(section);
  let data = props[section];

  const handleEditForm = (data) => {
    setInitialValues(data);
  };

  const onArchieved = async (payload) => {
    await props.create({
      payload,
      key: section,
      params: ["archieved"],
      update_state: true,
      update: true,
    });
  };

  const onDrop = async (payload) => {
    await props.drop({
      payload,
      key: section,
      query: `?_id=${payload._id}`,
      params: ["drop"],
      update_state: true,
      update: true,
    });
  };
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = async (values) => {
    setSearchEntry(values);
    await props.read({
      dispatch_key: section,
      key: "crud_" + section,
      params: ["read"],
      query: `?searched_title=${values}`,
      replace: true,
    });
  };

  const handleClickMenu = async (obj) => {
    const { key } = obj;

    // await props.read({
    //   dispatch_key: key,
    //   key: "crud_" + key,
    //   query: `?category=${key}&&type=1`,
    //   replace: true,
    // });
  };

  const SearchSystem = (props) => {
    return (
      <Row>
        <Col span={24}>
          <Input.Search
            placeholder="Enter search title"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
          />
        </Col>
        <Col
          onClick={() => onSearch("")}
          style={{ textAlign: "right" }}
          className="table_searched"
        >
          {searchEntry && (
            <FA
              title_position="left"
              icon={"fas fa-times-circle"}
              title={searchEntry}
            />
          )}
        </Col>
      </Row>
    );
  };

  return (
    <Row gutter={24}>
      <Col className="admin_container" span={24}>
        <AdminMenu
          handleClickMenu={handleClickMenu}
          collapsed={collapsed}
          toggleCollapsed={toggleCollapsed}
        />
      </Col>
      <Col className="admin_title" span={24}>
        <Row>
          <Col {...span_left}>
            <h1>{title}</h1>
          </Col>
          <Col {...span_right}>
            <SearchSystem value={searchEntry} />
          </Col>
          <Col>
          <Button
                                        type="primary"
                                        block
                                        onClick={() => window.location.replace("https://public-health-backend.herokuapp.com/api/members/allmembers")}
                                        size="small"
                                        className="action_btn"
                                    >Get Members List via Email</Button>
          </Col>
        </Row>
      </Col>
      <Col className="admin_title" span={24}>
        <GenerateForm
          handleEditForm={handleEditForm}
          onArchieved={onArchieved}
          loading={loading}
          onSubmit={onSubmit}
          section={section}
          onDrop={onDrop}
        />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  posts: state.master.posts,
  scientists: state.master.scientists,
  websites: state.master.websites,
  users: state.master.users,
  subscribers: state.master.subscribers,
});

const mapDispatchToProps = { create, drop, read };

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
