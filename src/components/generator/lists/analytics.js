import { Table, Space, Avatar, Image, Popconfirm, Button, Row, Col } from "antd";
import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { read } from "../../../redux/actions/master";
import moment from "moment";
import Title from "antd/lib/typography/Title";
import ReactGA from 'react-ga';
import { renderButton, checkSignedIn } from "../../../utils/utils";
import GAnalytics from "./g-analytics";
import { AnalyticsDashboard } from 'react-analytics-charts';
// Over ten different commonly used charts are available
import { SessionsByDateChart, SessionsGeoChart } from 'react-analytics-charts';
import {
    useAnalyticsApi,
    useAuthorize,
    useDataChart,
    useSignOut,
    useViewSelector,
  } from "react-use-analytics-api";

const TRACKING_ID = "UA-310500240-1";
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
    websites: [
        {
            title: "Title",
            dataIndex: "title",

            sorter: true,
            // sorter: (a, b) => a.title - b.title,
            filterSearch: true,
        },
    ],
    users: [
        {
            title: "Title",
            dataIndex: "title",

            sorter: true,
            // sorter: (a, b) => a.title - b.title,
            filterSearch: true,
        },
    ],
};

const GenerateTable = (props) => {
    const [loading, setLoading] = useState();
    const [isSignedIn, setIsSignedIn] = useState(false);
    const { ready, gapi, authorized, error } = useAnalyticsApi();
    const [viewId, setViewId] = useState();
    const viewSelectorContainerId = "view-selector-container";
    useViewSelector(
      authorized ? gapi : undefined,
      viewSelectorContainerId,
      (viewId) => setViewId(viewId)
    );
    const query = {
      ids: viewId,
      "start-date": "28daysAgo",
      "end-date": "today",
      metrics: "ga:sessions",
      dimensions: "ga:date",
    };
    const chart = {
      container: "data-chart-container",
      type: "LINE",
      options: {
        title: "Sessions (28 Days)",
      },
    };
    useDataChart(authorized ? gapi : undefined, query, chart);
  
    // Workaround for API limitation - see useAuthorize docs
    const authDiv = useRef(null);
    const [authorizeCalled, setAuthorizeCalled] = useState(false);
    const hasAuthElements =
      authDiv.current && authDiv?.current?.children?.length > 0;
  
    const authorize = useAuthorize(gapi, {
      clientId: "660582169032-b1t02fpjkuenuip1v0i0q5p6m7uovtgu.apps.googleusercontent.com",
      container: "container-id",
    });
    const signOut = useSignOut(gapi);
  
    useEffect(() => {
      if (ready && !error && !authorizeCalled) {
        authorize();
        setAuthorizeCalled(true);
      }
    }, [ready, error, authorizeCalled, authorize]);

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
        } catch (error) { }
    };

    useEffect(() => {
        fetchData();
        window.gapi.load("auth2", init); //(1)
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
        let title = record.title || record.name;

        return (
            <div className="record_title">
                <a href={record.link} target="_blank" rel="noreferrer">
                    <p className="dark_color"> {title}</p>
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

    ReactGA.initialize(TRACKING_ID);
    ReactGA.set({
        username: localStorage.getItem('userName')
    });

    const updateSignin = (signedIn) => { //(3)
        setIsSignedIn(signedIn);
        if (!signedIn) {
            renderButton();
        }
    };

    const init = () => { //(2)
        checkSignedIn()
            .then((signedIn) => {
                updateSignin(signedIn);
            })
            .catch((error) => {
                console.error(error);
            });
    };




   

    return (
        <Row style={{ width: "100%" }}>
            <Col span={24}>
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
            </Col>
            <Col span={24}>
                <Row>
                    <Title level={4}>Google Analytics</Title>
                </Row>
                <Row>
                    <Col span={24}></Col>
                    <>
                    {authorized && (
                        <GAnalytics />
                    )}
                        {<div>
                        {!ready && <div>Loading...</div>}
                        {ready && (
                          <div>
                            {authorized && (
                              <div>
                                <div style={{ marginTop: "30px" }}>
                                  <div className="data-chart" id="data-chart-container" />
                                </div>
                                <div id={viewSelectorContainerId} style={{width: '100%'}} />
                                <div>
                                  <button onClick={() => signOut()}>Sign Out</button>
                                </div>
                              </div> 
                            )}
                            {!authorized && (
                              <div>
                                <div ref={authDiv} id="container-id"></div>
                                {!hasAuthElements && <div>🔄 Refresh the page to sign in.</div>}
                              </div>
                            )}
                          </div>
                        )}
                        {error && <div>{error.toString()}</div>}
                      </div>
                           }</>
                </Row>
            </Col>
        </Row>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    posts: state.master.posts || [],
    analytics: state.master.analytics || [],
    websites: state.master.websites || [],
    users: state.master.users || [],
});

const mapDispatchToProps = { read };

export default connect(mapStateToProps, mapDispatchToProps)(GenerateTable);
