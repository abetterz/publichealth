import React, { createRef, useEffect, useRef, useState} from "react";
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

  var video_id = "";

  if(item.video !== undefined && item.video.includes("youtube")){
    video_id = item.video.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
  }
  

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
    <Col  className="article_container solid">
      <a target={"_blank"} href={item.link} without rel="noreferrer">
        <Row >
      
         
          <Col className="article_info_container">
          <p className="story_tags_container nomargin">{categories}</p>

            <p className="article_title"> {item.title}</p>
            <div className="article_full_credit_container">
              <span> by {author} </span>
              <FA icon="far fa-clock" title={date} />
            </div>
            {/*<div className="article_button">
              <Button>Read More</Button>
            </div>*/}
           
          </Col>
          <>
                  {item.video !== undefined && item.video.includes("youtube") ? <Col class="ant-col article_image_container ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-12 ant-col-xl-12 ant-col-xxl-12" style={{padding: '0px',width: '100%'}}><iframe
      height="185"
      width="100%"
      src={`https://www.youtube.com/embed/${video_id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    /></Col> : ''}
                  </>
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

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  
  const observer = new IntersectionObserver(
    ([entry]) => {setIntersecting(entry.isIntersecting);}
  )

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}

const News = (props) => {
  const [news,setNews] = useState([]);
  const [limit,setLimit] = useState(12);
  const listInnerRef = useRef();

  let { section } = useParams();


 

  const ref = useRef()

  var fetchData = async ()=> {
  
    var res = await props.read({
        key: "news",
        query: section == 'index' ? `?limit=${limit}` : `?limit=${limit}&&category=${section}` ,
        replace: true,
      });
      setNews(res.data);
};

const isVisible = useOnScreen(ref);


const onScroll = () => {
  if (listInnerRef.current) {
    const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
    if (scrollTop + clientHeight === scrollHeight) {
      // TO SOMETHING HERE
      console.log('Reached bottom')
    }
  }
};

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      //setLimit
    }
  }


  useEffect(() => {fetchData()}, []);
  useEffect(() => {
    if(news.length > 11){
      var newInc = limit + 12;
      console.log(newInc);
      setLimit(newInc);
      fetchData()
    }
    if (limit === props.recent_news.length){

    }
  }, [isVisible]);



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
    <Row gutter={24} onScroll={onScroll}  ref={listInnerRef}>
      <Col {...span.left}>
        {/* <NewsFlash /> */}
        <StoryBody
          data={news}
          title={getTitle.title}
          title_blue={getTitle.sub}
        />
        <div ref={ref}>{isVisible && `Loading...`}</div>
      </Col>
      <Col {...span.right}>
        <RightSide {...props} />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  recent_news: state.master.recent_news || [],
});

const mapDispatchToProps = { read };

export default connect(mapStateToProps, mapDispatchToProps)(News);
