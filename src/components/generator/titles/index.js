const dict = {
  my_business: {
    title: "Find My Business",
    subtitle: "This system helps you achieve your business association goals",
    title_icon: "my_business",
  },
  business_profile: {
    title: "Business Profile",
    subtitle: "This system helps you achieve your business association goals",
    title_icon: "business_profile",
  },
  business_branding: {
    title: "Business Branding",
    subtitle: "This system helps you achieve your business association goals",
    title_icon: "business_branding",
  },
  business_hours: {
    title: "Business Hours",
    emphasis: "Business Hour",
    subtitle: "This system helps you achieve your business association goals",
    title_icon: "business_hours",
  },

  packages: {
    title: "Packages",
    emphasis: "Package",

    subtitle: "This system helps you achieve your business association goals",
    title_icon: "packages",
  },
  commitees: {
    emphasis: "Commitee",
    title: "Commitees",
    subtitle: "This system helps you achieve your business association goals",
    title_icon: "commitees",
  },
  events: {
    emphasis: "Event",
    title: "Events",
    subtitle: "This system helps you achieve your business association goals",
    title_icon: "events",
  },
  jobs: {
    emphasis: "Job",
    title: "Jobs",
    subtitle: "This system helps you achieve your business association goals",
    title_icon: "jobs",
  },

  employees: {
    emphasis: "Employee",
    title: "Employees",
    subtitle: "This system helps you achieve your business association goals",
    title_icon: "employees",
  },

  business_members: {
    emphasis: "Business Member",
    title: "Business Members",
    subtitle: "This system helps you achieve your business association goals",
    title_icon: "business_members",
  },
  api_connections: {
    emphasis: "External API Connectio",
    title: "External API Connections",
    subtitle: "This system helps you achieve your business association goals",
    title_icon: "api_connections",
  },
  preview_publish: {
    title: "Preview & Publish",
    subtitle: "This system helps you achieve your business association goals",
    title_icon: "done",
  },
};

const getTitle = (config = {}) => {
  const { dict_key } = config;
  let output = dict[dict_key] || dict[0];

  return output;
};

export default getTitle;
