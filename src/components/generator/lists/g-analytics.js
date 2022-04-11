import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { read } from "../../../redux/actions/master";
import { Table } from "antd";

const GAnalytics = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const queryReport = () => {//(1)
            window.gapi.client
                .request({
                    path: "/v4/reports:batchGet",
                    root: "https://analyticsreporting.googleapis.com/",
                    method: "POST",
                    body: {
                        reportRequests: [
                            {
                                viewId: "225455752", //enter your view ID here
                                dateRanges: [
                                    {
                                        startDate: "10daysAgo",
                                        endDate: "today",
                                    },
                                ],
                                metrics: [
                                    {
                                        expression: "ga:users",
                                    },
                                ],
                                dimensions: [
                                    {
                                        name: "ga:date",
                                    },
                                ],
                            },
                        ],
                    },
                })
                .then(displayResults, console.error.bind(console));
        };

        const displayResults = (response) => {//(2)
            const queryResult = response.result.reports[0].data.rows;
            const result = queryResult.map((row) => {
                const dateSting = row.dimensions[0];
                const formattedDate = `${dateSting.substring(0, 4)}
            -${dateSting.substring(4, 6)}-${dateSting.substring(6, 8)}`;
                return {
                    date: formattedDate,
                    visits: row.metrics[0].values[0],
                };
            });
            setData(result);
        };

        queryReport();
    }, []);

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Visits',
            dataIndex: 'visits',
            key: 'visits',
        },
    ];
    return (
        <Table style={{ width: "100%" }} dataSource={data} columns={columns}>
        </Table>
    );
    // return data.map((row) => (
    //     <div key={row.date}>{`${row.date}: ${row.visits} visits`}</div>//(3)
    // ));
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    posts: state.master.posts || [],
    analytics: state.master.analytics || [],
    websites: state.master.websites || [],
    users: state.master.users || [],
});

const mapDispatchToProps = { read };

export default connect(mapStateToProps, mapDispatchToProps)(GAnalytics);
