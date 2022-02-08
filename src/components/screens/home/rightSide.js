import { Col, Row, Card, Avatar, Divider } from "antd";
import React from "react";
import NewsletterForm from "./newsletter";
const { Meta } = Card;

export default function RightSide(props) {
  function Title(props) {
    const { title, title_blue, link_to, handleClick, section, hide_see_more } =
      props;

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
        {!hide_see_more && (
          <Col onClick={onClick} span={24}>
            <a href={link_to}>
              <div className="load_more">See More</div>
            </a>
          </Col>
        )}
      </Row>
    );
  }
  const doctors = [
    {
      name: "Paul Elias Alexander, PhD",
      link: "https://substack.com/profile/58916651-dr-paul-alexander",
      image:
        "https://childrenshealthdefense.org/wp-content/uploads/PaulAlexander.jpg",
      subtitle:
        "Paul Elias Alexander is a Canadian health researcher and a former Trump administration official ",
    },
    {
      name: "Ryan N. Cole MD",
      link: "https://independentdocsid.com/RyanColeMD",
      image:
        "https://bloximages.chicago2.vip.townnews.com/idahopress.com/content/tncms/assets/v3/editorial/c/2e/c2ee54ab-3c0d-522d-9d4c-2bfd94d5d87e/6111c36242d7c.image.jpg?crop=889%2C889%2C0%2C195&resize=1200%2C1200&order=crop%2Cresize",
      subtitle:
        "Dr. Cole is a board-certified dermatopathologist (AP & CP) and the CEO/Medical Director of Cole Diagnostics. ",
    },
    {
      link: "https://www.rwmalonemd.com/",
      name: "Robert W Malone MD",

      image:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/aqiwr1hm17sm1glcsvhz",
      subtitle: "American virologist and immunologist",
    },
  ];

  const domains = [
    {
      name: "Front Line COVID-19 Critical Care Alliance",
      link: "https://covid19criticalcare.com/",
      image:
        "https://covid19criticalcare.com/wp-content/uploads/2020/06/FLCCC_Alliance_footer.svg",
      subtitle:
        "Formed by leading critical care specialists in March 2020, at the beginning of the Coronavirus pandemic",
    },
    {
      name: "America’s Frontline Doctors",
      link: "https://americasfrontlinedoctors.org/news/",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/America%27s_Frontline_Doctors_official_logo.png",
      subtitle: "Fighting for Your Medical Freedom.",
    },
    {
      image:
        "https://storage.googleapis.com/publichealthnews/covid_19_early.png",
      name: "C19 Early",
      link: "https://c19early.com/",

      subtitle:
        "Treatments do not replace vaccines and other measures. All practical, effective, and safe means should be used. Elimination is a race against viral evolution.",
    },
  ];

  const alexander_substack = [
    {
      subtitle:
        " I am a COVID-19 Consultant Researcher in EBM, Research Methodology, and Clinical Epidemiology and I informally provide support to some members of the US Congress.",
      image:
        "https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/2b69936a-c043-4317-b71a-b84867777535_2800x2800.png",
    },
  ];

  const science_substack = [
    {
      link: "https://www.sciencedirect.com/science/article/pii/S2772613421000068",
      subtitle:
        "The “original antigenic sin” and its relevance for SARS-CoV-2 (COVID-19) vaccination ",
      name: "ScienceDirect",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Elsevier_logo_2019.svg/1200px-Elsevier_logo_2019.svg.png",
    },
    {
      link: "https://onlinelibrary.wiley.com/doi/10.1111/eci.13554",
      subtitle:
        "Reconciling estimates of global spread and infection fatality rates of COVID-19: An overview of systematic evaluations ",
      name: "Wiley Online Library",
      image:
        "https://library.stlawu.edu/sites/default/files/2020-04/wiley_online_clr2.png",
    },
    {
      link: "https://jamanetwork.com/journals/jamaotolaryngology/fullarticle/2784128",
      subtitle: "Cribriform Plate Injury After Nasal Swab Testing for COVID-19",
      name: "JAMA Network",
      image:
        "https://publons.com/media/thumbs/publishers/logos/fbfd45e4-834b-40ca-b947-c871cdcea0d8.png.200x200_q95_detail_letterbox_upscale.png",
    },
  ];

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

  function NewsLetter(props) {
    return (
      <Title {...props} hide_see_more={true}>
        <Row>
          <Col span={24}>
            <NewsletterForm />
          </Col>
        </Row>
      </Title>
    );
  }

  return (
    <Row>
      <Col span={24}>
        <NewsLetter
          title="PHN "
          title_blue=" Newsletter"
          hide_loadmore={true}
        />
        <SideBarItems
          assigned="react dev 4 9pm"
          title="Scientists "
          title_blue=" and Doctors"
          data={doctors}
          link_to={"/scientists-doctors/index"}
        />
        <SideBarItems
          assigned="react dev 5 9pm"
          title="Websites "
          title_blue="Links"
          data={domains}
          cardProps={{ avatar: { shape: "square" } }}
          link_to={"/websites/index"}
        />
        <SideBarItems
          assigned="react dev 4 9pm"
          title="Dr. Paul Alexander "
          title_blue=" Substack"
          hide_see_more={true}
          data={alexander_substack}
          link_to="https://substack.com/profile/58916651-dr-paul-alexander"
        />
        {/* <SideBarItems
          assigned="react dev 4 9pm"
          title="Covid-19 "
          title_blue=" Overview"
          data={alexander_covid_overview}
          link_to="/archives/covid_19_overview/"
        /> */}
        <SideBarItems
          assigned="react dev 4 9pm"
          title="Scientifics "
          title_blue=" Studies"
          data={science_substack}
          link_to="/archives/scientific_studies"
        />
      </Col>
    </Row>
  );
}
