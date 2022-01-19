let dict = {
  create: {
    current_stuff: {
      api: "/api/stuff/current",
    },
    // onboarding
    my_business: {
      api: "/api/business/place/my_business",
    },
    business_profile: {
      api: "/api/business/place/business_profile",
    },
    business_hours: {
      api: "/api/business/place/business_hours",
    },
    business_branding: {
      api: "/api/business/place/business_branding",
    },
    business_members: {
      api: "/api/business/place/business_members",
    },
    // resources
    packages: {
      api: "/api/business/benefits/packages",
    },
    commitees: {
      api: "/api/business/benefits/commitees",
    },
    events: {
      api: "/api/business/benefits/events",
    },
    jobs: {
      api: "/api/business/benefits/jobs",
    },
    employees: {
      api: "/api/business/jobs/employee",
    },

    // drop onboarding
    onboard_general_drop: {
      api: "/api/business/place/drop",
    },
    // external api
    papi_google_place: {
      api: "/papi/google/searched",
    },
    // external api
    papi_google_upload: {
      api: "/papi/upload/google",
    },
    publish_place: {
      api: "/api/business/place/publish_place",
    },
  },

  read: {
    admin_users: {
      api: "/api/admin/read/users",
    },
    admin_user: {
      api: "/api/admin/read/user",
    },
    admin_merchants: {
      api: "/api/admin/read/merchants",
    },
    my_api: {
      api: "/api/business/place/my_api",
    },
    isonboard: {
      api: "/api/business/place/isonboard",
    },
  },
  quick: {
    admin_users: {
      api: "/api/admin/quick",
    },
  },
  drop: {},
  indie: {
    upload_image_link: process.env.REACT_APP_SERVER + "/papi/upload/file",
    papi_branding_logo:
      process.env.REACT_APP_SERVER + "/papi/upload/branding/logo",
    papi_branding_banner:
      process.env.REACT_APP_SERVER + "/papi/upload/branding/banner",
    papi_branding_poster:
      process.env.REACT_APP_SERVER + "/papi/upload/branding/poster",
    papi_package_image:
      process.env.REACT_APP_SERVER + "/papi/upload/branding/package",
  },
  public: {},
  read_one: {
    api: "/api/crud/read_one",
  },
};

export function getIndie(dict_key) {
  let output = dict.indie[dict_key];
  return output;
}
export default function option(target, key, callback) {
  let output = dict[target][key] || {};

  if (callback) {
    callback(output);
  }
  return output;
}
