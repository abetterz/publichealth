import bootcamp_for_parents from "./bootcamp_for_parents";
import reports from "./report";
import video_archives from "./video_archives";
import covid_boot_camp from "./covid_boot_camp";
import scientific_studies from "./scientific_studies";
import printed_archives from "./printed_archives";
import covid_19_overview from "./covid_19_overview";
const dict = {
  bootcamp_for_parents,
  reports,
  video_archives,
  covid_boot_camp,
  scientific_studies,
  printed_archives,
  covid_19_overview,
};

const GetPage = (dict_key) => {
  return dict[dict_key] || covid_boot_camp;
};

export default GetPage;
