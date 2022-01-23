import React, { useEffect } from "react";
import { Row, Col, Divider } from "antd";
import Hero from "./carousel";
import { FA } from "../../../utils/images";
import { Card, Avatar } from "antd";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { read } from "../../../redux/actions/master";
import { MakeList } from "../../../utils/list";
import moment from "moment";
const { Meta } = Card;

function NewsFlash() {
  return <div>news flash </div>;
}

function Title(props) {
  const { title, title_blue, link_to, handleClick, section } = props;

  let full_title = (
    <div>
      {title} <span className="header_blue">{title_blue}</span>
    </div>
  );

  const onClick = () => {
    handleClick && handleClick(section);
  };

  return (
    <Row>
      <Col className="item_title" span={24}>
        <Divider orientationMargin={0} orientation="left">
          {full_title}
        </Divider>
      </Col>
      <Col span={24}>{props.children}</Col>
      <Col onClick={onClick} span={24}>
        <a href={link_to}>
          <div className="load_more">Load More</div>
        </a>
      </Col>
    </Row>
  );
}

function StoryBody(props) {
  const { link_to, data, handleClick } = props;

  return (
    <Title handleClick={handleClick} link_to={link_to} {...props}>
      <Row gutter={36}>
        {data.map((item, index) => {
          let default_span = {
            container: {
              xs: 24,
              sm: 24,
              md: index > 1 ? 12 : 24,
              lg: index > 1 ? 12 : 24,
              xl: index > 1 ? 8 : 12,
              xxl: index > 1 ? 8 : 12,
            },
            image: 24,
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
          let gotDate = moment(item.created_at).format("MMMM Do YYYY");

          let date = item.date_published || gotDate;
          return (
            <Col {...span.container} className="article_container">
              <a target={"_blank"} href={item.link} without rel="noreferrer">
                <Row>
                  <Col span={span.image} className="article_image_container">
                    {item.image || item.screenshot ? (
                      <img
                        className="full_width"
                        alt={item.title}
                        src={item.image || item.screenshot}
                      />
                    ) : (
                      <div className="default_image">{item.title}</div>
                    )}
                  </Col>
                  <Col span={span.title} className="article_info_container">
                    <p className="article_title"> {item.title}</p>
                    <div className="article_credit_container">
                      <span> by {author} </span>
                      <FA icon="far fa-clock" title={date} />
                    </div>
                  </Col>
                </Row>
              </a>
            </Col>
          );
        })}
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
              <Col className="doctors_container" span={24}>
                <Card>
                  <Meta {...meta} />
                </Card>
              </Col>
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
const HomePage = (props) => {
  useEffect(() => {
    props.read({
      key: "news",
      query: "?category=exclusive",
      dispatch_key: "exclusive",

      replace: true,
    });
    props.read({
      key: "news",
      query: "?category=must_read",
      dispatch_key: "must_read",
      replace: true,
    });
    props.read({
      key: "news",
      query: "?category=updated_daily",
      dispatch_key: "updated_daily",
      replace: true,
    });
    props.read({
      key: "news",
      query: "?category=main_page",
      dispatch_key: "main_page",
      replace: true,
    });
  }, []);

  const handleClick = async (section) => {
    await props.read({
      key: "news",
      dispatch_key: section,
      query: `?category=${section}&&type=1`,
      replace: true,
    });
  };

  console.log(props, "testing_props_here");
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

  const doctors = [
    {
      name: "Paul Elias Alexander, PhD",
      link: "#",
      image:
        "https://childrenshealthdefense.org/wp-content/uploads/PaulAlexander.jpg",
      subtitle:
        "Paul Elias Alexander is a Canadian health researcher and a former Trump administration official ",
    },
    {
      name: "Ryan N. Cole MD",
      link: "#",
      image:
        "https://bloximages.chicago2.vip.townnews.com/idahopress.com/content/tncms/assets/v3/editorial/c/2e/c2ee54ab-3c0d-522d-9d4c-2bfd94d5d87e/6111c36242d7c.image.jpg?crop=889%2C889%2C0%2C195&resize=1200%2C1200&order=crop%2Cresize",
      subtitle:
        "Dr. Cole is a board-certified dermatopathologist (AP & CP) and the CEO/Medical Director of Cole Diagnostics. ",
    },
    {
      name: "Robert W Malone MD",
      link: "#",
      image:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/aqiwr1hm17sm1glcsvhz",
      subtitle: "American virologist and immunologist",
    },
  ];

  const domains = [
    {
      name: "Front Line COVID-19 Critical Care Alliance",
      link: "#",
      image:
        "https://covid19criticalcare.com/wp-content/uploads/2020/06/FLCCC_Alliance_footer.svg",
      subtitle:
        "Formed by leading critical care specialists in March 2020, at the beginning of the Coronavirus pandemic",
    },
    {
      name: "America’s Frontline Doctors",
      link: "#",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/America%27s_Frontline_Doctors_official_logo.png",
      subtitle: "Fighting for Your Medical Freedom.",
    },
    {
      name: "C19 Early",
      link: "#",

      subtitle:
        "Treatments do not replace vaccines and other measures. All practical, effective, and safe means should be used. Elimination is a race against viral evolution.",
    },
  ];

  const alexander_covid_overview = [
    {
      name: "CHAPTER 100",
      subtitle: "A Call for an Independent International COVID Commission",
      image:
        "https://aneighborschoice.com/wp-content/uploads/2021/07/paul-alexander-follows-science-1030x541.png",
    },
    {
      name: "CHAPTER 99",
      subtitle:
        "We will kill thousands of children and more with these COVID vaccines",
      image:
        "https://aneighborschoice.com/wp-content/uploads/2021/07/paul-alexander-follows-science-1030x541.png",
    },
    {
      name: "CHAPTER 98",
      subtitle: "Religious exemption vaccine information",
      image:
        "https://aneighborschoice.com/wp-content/uploads/2021/07/paul-alexander-follows-science-1030x541.png",
    },
  ];

  const alexander_substack = [
    {
      subtitle:
        "Supreme Court’s Gorsuch refused to wear mask despite request over Sotomayor’s Covid concerns, report says despite a request from Chief Justice John Roberts for all members of the high court to wear",
      image:
        "https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/2b69936a-c043-4317-b71a-b84867777535_2800x2800.png",
    },
    {
      subtitle:
        "It was NEVER COVID the 'virus', it was the 'RESPONSE' to it, the corrupted, POLITICAL response, not public health, oh I supported and loved Trump, to me outstanding, but made 2 catastrophic mistakes ",
      image:
        "https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/2b69936a-c043-4317-b71a-b84867777535_2800x2800.png",
    },
    {
      subtitle:
        "Israeli vaccine chief: “We have made mistakes”; finally a public health official/scientist, accepting responsibility & saying they were wrong; Covid will be “like flu”...big praise for honesty ",
      image:
        "https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/2b69936a-c043-4317-b71a-b84867777535_2800x2800.png",
    },
  ];

  const science_substack = [
    {
      subtitle:
        "The “original antigenic sin” and its relevance for SARS-CoV-2 (COVID-19) vaccination ",
      name: "ScienceDirect",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Elsevier_logo_2019.svg/1200px-Elsevier_logo_2019.svg.png",
    },
    {
      subtitle:
        "Reconciling estimates of global spread and infection fatality rates of COVID-19: An overview of systematic evaluations ",
      name: "Wiley Online Library",
      image:
        "https://library.stlawu.edu/sites/default/files/2020-04/wiley_online_clr2.png",
    },
    {
      subtitle: "Cribriform Plate Injury After Nasal Swab Testing for COVID-19",
      name: "JAMA Network",
      image:
        "https://publons.com/media/thumbs/publishers/logos/fbfd45e4-834b-40ca-b947-c871cdcea0d8.png.200x200_q95_detail_letterbox_upscale.png",
    },
  ];

  return (
    <Row gutter={24}>
      <Col {...span.left}>
        {/* <NewsFlash /> */}
        <Hero data={props.main_page} />
        <StoryBody
          data={props.exclusive}
          assigned="react dev 2 9pm"
          title="PublicHealth.News "
          title_blue="Exclusive"
          link_to={"/news/exclusive"}
          handleClick={handleClick}
          section="exclusive"
        />
        <StoryBody
          data={props.must_read}
          assigned="react dev 1 9pm"
          title="Must "
          title_blue=" Read"
          link_to={"/news/must_read"}
          handleClick={handleClick}
          section="must_read"
        />

        <StoryBody
          data={props.updated_daily}
          assigned="react dev 3 9pm"
          title="News - "
          title_blue="Updated Daily"
          link_to={"/news/updated_daily"}
          handleClick={handleClick}
          section="updated_daily"
        />
      </Col>
      <Col {...span.right}>
        <SideBarItems
          assigned="react dev 4 9pm"
          title="Scientists "
          title_blue=" and Doctors"
          data={doctors}
        />

        <SideBarItems
          assigned="react dev 5 9pm"
          title="Websites "
          title_blue="Links"
          data={domains}
          cardProps={{ avatar: { shape: "square" } }}
        />
        <SideBarItems
          assigned="react dev 4 9pm"
          title="Dr. Paul Alexander "
          title_blue=" Substack"
          data={alexander_substack}
        />
        <SideBarItems
          assigned="react dev 4 9pm"
          title="Covid-19 "
          title_blue=" Overview"
          data={alexander_covid_overview}
        />
        <SideBarItems
          assigned="react dev 4 9pm"
          title="Scientifics "
          title_blue=" Studies"
          data={science_substack}
        />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  exclusive: state.master.exclusive || [],
  must_read: state.master.must_read || [],
  updated_daily: state.master.updated_daily || [],
  main_page: state.master.main_page || [],
});

const mapDispatchToProps = { read };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
