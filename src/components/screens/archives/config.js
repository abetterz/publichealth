import bootcamp from "./bootcamp";
import report from "./report";
import scientfic_studies from "./scientfic_studies";
import video from "./video";
const dict = {
  bootcamp,
  report,
  scientfic_studies,
  video,
};

const GetPage = (dict_key) => {
  return dict[dict_key] || video;
};

export default GetPage;
