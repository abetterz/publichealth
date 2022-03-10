import React, { createRef, useEffect, useRef } from "react";
import { Row, Col, Divider, Tag } from "antd";
import Hero from "./carousel";
import { FA } from "../../../utils/images";
import { Card, Avatar, Button } from "antd";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { read } from "../../../redux/actions/master";
import { MakeList } from "../../../utils/list";
import moment from "moment";
import RightSide from "../home/rightSide";

const { Meta } = Card;

export const NewCard = (item, index) => {
  let default_span = {
    container: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24,
      xl: 24,
      xxl: 24,
    },
    image: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 12,
      xl: 12,
      xxl: 12,
    },
    content: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 12,
      xl: 12,
      xxl: 12,
    },
  };

  let span = item.span || default_span;

  let author = item.author;
  if (!author) {
    let domain = item.link;
    if (domain) {
      domain = domain.split(".");
      author = domain[0] + ".";
      author = author.split("//");
      author = author[1];
      let prefix = (domain[1] && domain[1].split("/")) || [];
      author += prefix[0];
    }
  }
  const ref = useRef({});

  let categories = [];
  item.categories &&
    item.categories.forEach((category, key) => {
      let output = category.split("_").join(" ");
      categories.push(
        <Tag color={"blue"} key={key}>
          {output}
        </Tag>
      );
    });

  const image = item.image || item.screenshot;
  let width = ref.current[index] && ref.current[index].clientWidth;
  let height = width * 0.5;
  let gotDate = item.created_at;

  console.log(item.created_at);
  let date = moment(gotDate).format("MMMM Do YYYY");

  return (
    <Col {...span.container} className="article_container">
      <a target={"_blank"} href={item.link} without rel="noreferrer">
        <Row gutter={24}>
          <Col
            ref={(element) => (ref.current[index] = element)}
            style={{
              backgroundImage: `url("${image}")`,
              height,
            }}
            {...span.image}
            className="article_image_container"
          >
            <Row>
              <Col className="story_tags_container">{categories}</Col>
            </Row>
          </Col>

          <Col {...span.content} className="article_info_container">
            <p className="article_title"> {item.title}</p>
            <div className="article_full_credit_container">
              <span> by {author} </span>
              <FA icon="far fa-clock" title={date} />
            </div>
            <div className="article_button">
              <Button>Read More</Button>
            </div>
          </Col>
        </Row>
      </a>
    </Col>
  );
};

function NewsFlash() {
  return <div>news flash </div>;
}

function Title(props) {
  const { hide_loadmore, title, title_blue, link_to } = props;

  let full_title = (
    <div>
      {title} <span className="header_blue">{title_blue}</span>
    </div>
  );

  return (
    <Row>
      <Col className="item_title" span={24}>
        <Divider orientationMargin={0} orientation="left">
          {full_title}
        </Divider>
      </Col>
      <Col span={24}>{props.children}</Col>
      {!hide_loadmore && (
        <Col span={24}>
          <a href={link_to}>
            <div className="load_more">Load More</div>
          </a>
        </Col>
      )}
    </Row>
  );
}

function StoryBody(props) {
  return (
    <Title hide_loadmore={true} {...props}>
      <Row gutter={36}>
        <MakeList {...props} />
      </Row>
    </Title>
  );
}
function SideBarItems(props) {
  const { data = [], cardProps = {} } = props;
  const { avatar = {} } = cardProps;

  return (
    <Title {...props}>
      <Row>
        <Col span={24}>
          {data.map((item) => {
            let gotAvatar = <Avatar size={64} src={item.image} {...avatar} />;

            let meta = {
              avatar: item.image && (
                <Avatar size={64} src={item.image} {...avatar} />
              ),
              title: item.name,
              description: item.subtitle,
            };
            return (
              <a
                rel="noreferrer"
                target={"_blank"}
                href={item.link || props.link_to}
              >
                <Col className="doctors_container" span={24}>
                  <Card>
                    <Meta {...meta} />
                  </Card>
                </Col>
              </a>
            );
          })}
        </Col>
      </Row>
    </Title>
  );
}
function Brands(props) {
  const { assigned } = props;
  return (
    <Title {...props}>
      <Row>
        <Col>{assigned}</Col>
      </Row>
    </Title>
  );
}
const News = (props) => {
  let fetchInitial = async () => {
    await props.read({
      key: "news",
      query: `?category=top_stories`,

      replace: true,
    });
    await props.read({
      key: "news",
      query: "?category=featured_story",
      dispatch_key: "featured_story",

      replace: true,
    });
    await props.read({
      key: "news",
      query: "?category=exclusive",
      dispatch_key: "exclusive_stories",

      replace: true,
    });
    await props.read({
      key: "news",
      query: "?category=must_read",
      dispatch_key: "must_read",
      replace: true,
    });
    await props.read({
      key: "news",
      query: "?category=updated_daily",
      dispatch_key: "updated_daily",
      replace: true,
    });
  };
  useEffect(() => {
    fetchInitial();
  }, []);

  let { section } = useParams();

  console.log(props.recent_news, "checking_for_exclusive");

  let span = {
    left: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 16,
      xl: 16,
      xxl: 16,
    },
    right: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 8,
      xl: 8,
      xxl: 8,
    },
  };

  const title = {
    default: {
      title: "Most",
      sub: "Recent News",
    },
    exclusive_stories: {
      title: "PublicHealth.News",
      sub: "Exclusive",
    },
    must_read: {
      title: "Must",
      sub: "Read",
    },
    updated_daily: {
      title: "News",
      sub: "Updated Daily",
    },
    top_stories: {
      title: "Top",
      sub: "Stories",
    },
  };

  const getTitle = title[section] || title.default;

  console.log(props.recent_news);
  return (
    <Row gutter={24}>
      <Col {...span.left}>
        {/* <NewsFlash /> */}
        <StoryBody
          data={props.recent_news}
          title={getTitle.title}
          title_blue={getTitle.sub}
        />
      </Col>
      <Col {...span.right}>
        <RightSide {...props} />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  recent_news: state.master.news || [],
  featured_story: state.master.featured_story || [],
  top_stories: state.master.top_stories || [],
});

const mapDispatchToProps = { read };

export default connect(mapStateToProps, mapDispatchToProps)(News);
