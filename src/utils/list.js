import { List, Avatar, Space } from "antd";
import { NewCard } from "../components/screens/news";

export const MakeList = ({ data, Card }) => {
  let GotCard = Card || NewCard;
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 12,
      }}
      dataSource={data}
      footer={<div>{/* <b>ant design</b> footer part */}</div>}
      renderItem={(item) => <GotCard {...item} />}
    />
  );
};
