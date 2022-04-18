import { List, Avatar, Space } from "antd";
import { NewCard } from "../components/screens/news";
import { useState } from "react";
export const MakeList = ({ data, Card }) => {

  const [list,setLimit] = useState(0)

  let GotCard = Card || NewCard;

  
 
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={false}
      dataSource={data}
      footer={<div>{/* <b>ant design</b> footer part */}</div>}
      renderItem={(item) => <GotCard {...item} />}
    />
  );
};
