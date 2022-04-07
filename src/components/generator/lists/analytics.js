import { Table, Space, Avatar, Image, Popconfirm, Button } from "antd";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { read } from "../../../redux/actions/master";
import moment from "moment";
const { Column } = Table;

const title = {
  exclusive_stories: "Exclusive",
  must_read: "Must Read",
  updated_daily: "Updated Daily",
  featured_story: "Featured Story",
};

const columns = {
  posts: [
    {
      title: "Image",
      dataIndex: "image",
    },
    {
      title: "Full Name",
      dataIndex: "fullname",

      sorter: true,
      // sorter: (a, b) => a.title - b.title,
      filterSearch: true,
    },
    {
      title: "Title",
      dataIndex: "title",

      sorter: true,
      // sorter: (a, b) => a.title - b.title,
      filterSearch: true,
    },
    {
      title: "Categories",
      dataIndex: "categories",
    },
    {
      title: "Metadata",
      dataIndex: "metadata",
    },
  ],
  scientists: [
    {
      title: "Title",
      dataIndex: "title",

      sorter: true,
      // sorter: (a, b) => a.title - b.title,
      filterSearch: true,
    },
  ],
  websites: [
    {
      title: "Title",
      dataIndex: "title",

      sorter: true,
      // sorter: (a, b) => a.title - b.title,
      filterSearch: true,
    },
  ],
  analytics: [
    {
        title: "Email",
        dataIndex: "email",
        sorter: true,
        // sorter: (a, b) => a.title - b.title,
        filterSearch: true,
    },
    {
        title: "Login Count",
        dataIndex: "logincount",
    },
    {
        title: "Changes Made",
        dataIndex: "changesMade",
    },
    {
        title: "Last Login",
        dataIndex: "lastLogin",
    }
],
  users: [
    {
      title: "Image",
      dataIndex: "image",
    },
    {
      title: "Full Name",
      dataIndex: "title",

      sorter: true,
      // sorter: (a, b) => a.title - b.title,
      filterSearch: true,
    },
    {
      title: "Email",
      dataIndex: "email",

      sorter: true,
      // sorter: (a, b) => a.title - b.title,
      filterSearch: true,
    },
    {
      title: "User Type",
      dataIndex: "metadata",

      sorter: true,
      // sorter: (a, b) => a.title - b.title,
      filterSearch: true,
    },
  ],
};

const GenerateTable = (props) => {
  const [loading, setLoading] = useState();
  const fetchData = async () => {
    try {
      setLoading(true);
      await props.read({
        key: "admin_list",
        params: [props.section, "read"],
        query: `?category=${props.section}`,
        dispatch_key: props.section,
        replace: true,
      });
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  let data = props[props.section];

  const defaultText = (props) => {
    const { text } = props;
    return <div>{text}</div>;
  };

  let SetCategories = (props) => {
    const { record } = props;
    let categories = [];
    record.categories.forEach((item) => {
      categories.push(title[item]);
    });
    categories = categories.toString();
    return <div className="record_title">{categories}</div>;
  };
  let SetMetadata = (props) => {
    const { record } = props;
    let author = record.author;
    if (!author) {
      let domain = record.link;
      if (domain) {
        domain = domain.split(".");
        author = domain[0] + ".";
        author = author.split("//");
        author = author[1];
        let prefix = (domain[1] && domain[1].split("/")) || [];
        author += prefix[0];
      }
    }
    let gotDate = record.published_on || record.created_at;
    let date = moment(gotDate).format("MMMM Do YYYY");

    let image_from;
    if (record.image) {
      image_from = "Uploaded";
    } else if (record.screenshot) {
      image_from = "Screenshot";
    }
    return (
      <div className="record_title">
        <div>{author}</div>
        <div>{date}</div>
        <div>Hide Image: {record.hide_image ? "True" : "False"}</div>
        <div>Image From: {image_from}</div>
      </div>
    );
  };
  let SetTitle = (props) => {
    const { record } = props;

    return (
      <div className="record_title">
        <a href={record.link} target="_blank" rel="noreferrer">
          <p className="dark_color"> {record.name}</p>
          <p className="dark_color"> {record.title}</p>
        </a>
      </div>
    );
  };

  let SetImage = (props) => {
    const { record } = props;
    let src = record.image || record.screenshot;

    return (
      <Avatar
        shape="square"
        size={96}
        src={<Image alt={record.title} src={src} />}
      />
    );
  };
  let dict = {
    image: SetImage,
    title: SetTitle,
    categories: SetCategories,
    metadata: SetMetadata,
    default: defaultText,
  };
  console.log(props.section, "testinging_initialvalues");

  return (
    <Table style={{ width: "100%" }} dataSource={data}>
      {columns[props.section].map((column) => {
        return (
          <Column
            title={column.title}
            dataIndex={column.dataIndex}
            filter={column.filters}
            key={column.dataIndex}
            render={(text, record) => {
              let GotComponent = dict[column.dataIndex] || dict.default;
              return (
                <GotComponent
                  filter={column.filter}
                  record={record}
                  text={text}
                />
              );
            }}
          />
        );
      })}
      {/*<Column
        title="Action"
        key="action"
        render={(text, record) => (
          <div className="pointer">
            <Button
              type="primary"
              block
              onClick={() => props.handleOnEdit(record)}
              size="small"
              className="action_btn"
            >
              Edit
            </Button>
            <Button
              className="action_btn"
              block
              onClick={() => props.onArchieved(record)}
              size="small"
            >
              {record.published ? "Archieved" : "Published"}
            </Button>
            <Popconfirm
              title="Are you sure to delete this?"
              onConfirm={() => props.onDrop(record)}
              onCancel={(f) => f}
              okText="Yes"
              cancelText="No"
            >
              <Button className="action_btn danger" block size="small">
                Delete
              </Button>
            </Popconfirm>
          </div>
        )}
        />*/}
    </Table>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  posts: state.master.posts || [],
  scientists: state.master.scientists || [],
  websites: state.master.websites || [],
  users: state.master.users || [],
});

const mapDispatchToProps = { read };

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTable);
