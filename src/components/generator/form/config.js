let dict = {
  scientists: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "title",
          label: "Title",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Enter site name",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "link",
          label: "Site Link",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Enter the site link",
        },
      },
    },
    {
      type: "UploadImage",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "poster",
          label: "Poster",
        },
        deco: {
          aspect: 1 / 1,
          icon: "fas fa-camera-retro",
          hide: ["type", "folder"],
        },
        field_props: {
          placeholder: "Upload your poster",
        },
        values: {},
        indie: {
          link: "papi_commitee_poster",
          file_position: 0,
        },
      },
    },
  ],
  business_members: [
    {
      type: "SelfOrPlace",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          label: "Business Members",
          rules: [{ required: true, message: "Members is required!" }],
          size: "large",
          name: "place",
        },
        field_props: {
          className: "dark_theme full_width",
          size: "large",
          placeholder: "search a business by name",
        },
        indie: {
          max: 1,
        },
      },
    },
    {
      type: "SimpleSelect",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "relationship",
          label: "Business Relationship",
          rules: [{ required: true, message: "Relationships is required!" }],
          showSearch: true,
          allowClear: true,
        },
        field_props: {
          placeholder: "Search relationship or type a new one",
          mode: "tags",
        },

        indie: {
          option_key: "associate_relationship",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "contact_name",
          label: "Contact Name",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Enter main contact name",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "contact_email",
          label: "Contact Email",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Enter main contact email address",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "contact_phone",
          label: "Contact Phone Number",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Enter main contact phone number",
        },
      },
    },
    {
      type: "SimpleTextArea",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "contact_message",
          label: "Message to Contact",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Write a message to this contact",
        },
      },
    },
  ],
  threshold: [
    {
      type: "SimpleSlider",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "threshold",
          rules: [{ required: true, message: "Threshold is required!" }],
          label: "Threshold",
        },
        field_props: {
          className: "dark_theme full_width",
          label: "Threshold",
        },
      },
    },
  ],
  employees: [
    // packages: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 18,
        xl: 18,
        xxl: 18,
      },
      field: {
        config: {
          name: "name",
          rules: [{ required: true, message: "Title is required!" }],
          label: "Name",
        },
        field_props: {
          className: "dark_theme full_width",
          label: "Name",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 6,
        xl: 6,
        xxl: 6,
      },
      field: {
        config: {
          name: "user_id",
          label: "Internal User ID",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Internal User ID",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "email",
          rules: [{ required: true, message: "Email is required!" }],
          label: "Email",
        },
        field_props: {
          className: "dark_theme full_width",
          label: "Email",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "phone_number",
          rules: [{ required: true, message: "Phone Number is required!" }],
          label: "Phone Number",
        },
        field_props: {
          className: "dark_theme full_width",
          label: "Phone Number",
        },
      },
    },

    {
      type: "SimpleSelect",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "job",
          label: "Position",
          showSearch: true,
          allowClear: true,
        },
        field_props: {
          placeholder: "Position",
          mode: "multiple",
        },

        indie: {
          option_key: "job",
        },
      },
    },
  ],
  jobs: [
    // packages: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 18,
        xl: 18,
        xxl: 18,
      },
      field: {
        config: {
          name: "title",
          rules: [{ required: true, message: "Title is required!" }],
          label: "Position Title",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Job Position",
        },
      },
    },
    {
      type: "SimpleNumber",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 6,
        xl: 6,
        xxl: 6,
      },
      field: {
        config: {
          name: "qty",
          label: "Number of Hire",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Number of Hire",
        },
      },
    },
    {
      type: "SimpleNumber",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "low_salary",
          label: "Low Salary",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Low Salary",
        },
      },
    },
    {
      type: "SimpleNumber",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "high_salary",
          label: "High Salary",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "High Salary",
        },
      },
    },
    {
      type: "SimpleSelect",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "categories",
          label: "Category",
          showSearch: true,
          allowClear: true,
        },
        field_props: {
          placeholder: "Select Categories",
          mode: "multiple",
        },

        indie: {
          option_key: "position_categories",
        },
      },
    },

    {
      type: "SimpleSelect",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "level",
          label: "Level",
          showSearch: true,
          allowClear: true,
        },
        field_props: {
          placeholder: "Select a Level",
          mode: "multiple",
        },

        indie: {
          option_key: "position_level",
        },
      },
    },
    {
      type: "SimpleTextArea",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "description",
          label: "Description",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Description",
        },
      },
    },
    {
      type: "Accordion",

      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      label: "Additional Information",
      name: "details",
      sub_fields: [
        {
          type: "SimpleBoolean",
          span: {
            xs: 24,
            sm: 24,
            md: 12,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "invite_only",
              label: "Invite Only",
            },
            field_props: {
              mode: "simple",
              placeholder: "Invite Only",
            },
            indie: {},
          },
        },
        {
          type: "SimpleSelect",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "type",
              label: "Job Type",
              showSearch: true,
              allowClear: true,
            },
            field_props: {
              placeholder: "Select Job Type",
              mode: "multiple",
            },

            indie: {
              option_key: "job_type",
            },
          },
        },
        {
          type: "SimpleSelect",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "qualifications",
              label: "Qualifications",
              showSearch: true,
              allowClear: true,
            },
            field_props: {
              placeholder: "Qualifications",
              mode: "tags",
            },

            indie: {
              option_key: "job_qualifications",
            },
          },
        },
        {
          type: "SimpleSelect",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "benefits",
              label: "Benefits",
              showSearch: true,
              allowClear: true,
            },
            field_props: {
              placeholder: "Benefits",
              mode: "tags",
            },

            indie: {
              option_key: "job_benefits",
            },
          },
        },
        {
          type: "SimpleSelect",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 24,
            xl: 24,
            xxl: 24,
          },
          field: {
            config: {
              name: "experience",
              label: "Experience",
              showSearch: true,
              allowClear: true,
            },
            field_props: {
              placeholder: "Experience",
              mode: "tags",
            },

            indie: {
              option_key: "job_experience",
            },
          },
        },

        {
          type: "SimpleTextArea",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 24,
            xl: 24,
            xxl: 24,
          },
          field: {
            config: {
              name: "responsibilities",
              label: "Responsibilities",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Responsibilities",
            },
          },
        },
        {
          type: "SimpleSelect",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 24,
            xl: 24,
            xxl: 24,
          },
          field: {
            config: {
              name: "additional_info",
              label: "Additional Info",
              showSearch: true,
              allowClear: true,
            },
            field_props: {
              placeholder: "Additional Info",
              mode: "tags",
            },

            indie: {
              option_key: "additional_info",
            },
          },
        },
      ],
    },
    {
      type: "Accordion",

      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      label: "Files",
      name: "files",
      sub_fields: [
        {
          type: "UploadImage",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 24,
            xl: 24,
            xxl: 24,
          },
          field: {
            config: {
              name: "public_files",
              label: "Add Public Files",
            },
            deco: {
              aspect: 1 / 1,
              icon: "fas fa-camera-retro",
              hide: ["type", "folder"],
            },
            field_props: {
              placeholder: "Add Public Files",
            },
            values: {},
            indie: {
              link: "papi_public_files",
            },
          },
        },
        {
          type: "UploadImage",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 24,
            xl: 24,
            xxl: 24,
          },
          field: {
            config: {
              name: "private_files",
              label: "Add Private Files",
            },
            deco: {
              aspect: 1 / 1,
              icon: "fas fa-camera-retro",
              hide: ["type", "folder"],
            },
            field_props: {
              placeholder: "Add Private Files",
            },
            values: {},
            indie: {
              link: "papi_private_files",
            },
          },
        },
      ],
    },
  ],
  events: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 18,
        xl: 18,
        xxl: 18,
      },
      field: {
        config: {
          name: "title",
          rules: [{ required: true, message: "Title is required!" }],
          label: "Title",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Title",
        },
      },
    },
    {
      type: "SimpleNumber",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 6,
        xl: 6,
        xxl: 6,
      },
      field: {
        config: {
          name: "price",
          rules: [{ required: true, message: "Price is required!" }],
          label: "Price",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Price",
        },
      },
    },
    {
      type: "SimpleSelect",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "categories",
          label: "categories",
          showSearch: true,
          allowClear: true,
        },
        field_props: {
          placeholder: "Select a Category",
          mode: "tags",
        },

        indie: {
          option_key: "commitee_categories",
        },
      },
    },
    {
      type: "SimpleBoolean",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "invite_only",
          label: "Invite Only",
        },
        field_props: {
          mode: "simple",
          placeholder: "Invite Only",
        },
        indie: {},
      },
    },
    {
      type: "SelfOrPlace",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          label: "Location",
          size: "large",
          name: "location",
        },
        field_props: {
          className: "dark_theme full_width",
          size: "large",
          placeholder: "Location name or address",
        },
        indie: {
          max: 1,
        },
      },
    },
    {
      type: "SimpleDate",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "date_start",
          label: "Date Start",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Date Start",
        },
      },
    },
    {
      type: "SimpleDate",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "date_end",
          label: "Date End",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Date End",
        },
      },
    },
    {
      type: "SimpleTime",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "time_start",
          label: "Time Start",
          rules: [{ required: true, message: "Time end is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Time Start",
        },
      },
    },
    {
      type: "SimpleTime",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "time_end",
          label: "Time End",
          rules: [{ required: true, message: "Time End is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Time End",
        },
      },
    },

    {
      type: "SimpleTextArea",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "description",
          label: "Description",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Description",
        },
      },
    },

    {
      type: "UploadImage",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "poster",
          label: "Poster",
        },
        deco: {
          aspect: 1 / 1,
          icon: "fas fa-camera-retro",
          hide: ["type", "folder"],
        },
        field_props: {
          placeholder: "Upload your poster",
        },
        values: {},
        indie: {
          link: "papi_commitee_poster",
          file_position: 0,
        },
      },
    },
  ],
  commitees: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 18,
        xl: 18,
        xxl: 18,
      },
      field: {
        config: {
          name: "title",
          rules: [{ required: true, message: "Title is required!" }],
          label: "Title",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Title",
        },
      },
    },
    {
      type: "SimpleNumber",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 6,
        xl: 6,
        xxl: 6,
      },
      field: {
        config: {
          name: "price",
          rules: [{ required: true, message: "Price is required!" }],
          label: "Price",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Price",
        },
      },
    },
    {
      type: "SimpleSelect",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "categories",
          label: "categories",
          showSearch: true,
          allowClear: true,
        },
        field_props: {
          placeholder: "Select a Category",
          mode: "tags",
        },

        indie: {
          option_key: "commitee_categories",
        },
      },
    },
    {
      type: "SimpleBoolean",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "invite_only",
          label: "Invite Only",
        },
        field_props: {
          mode: "simple",
          placeholder: "Invite Only",
        },
        indie: {},
      },
    },
    {
      type: "SimpleTextArea",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "mission",
          label: "Mission Statement",
        },
        field_props: {
          className: "dark_theme full_width",
          label: "Mission Statement",
        },
      },
    },

    {
      type: "UploadImage",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "poster",
        },
        deco: {
          aspect: 1 / 1,
          icon: "fas fa-camera-retro",
          hide: ["type", "folder"],
        },
        field_props: {
          placeholder: "Upload your poster",
          label: "Poster",
        },
        values: {},
        indie: {
          link: "papi_commitee_poster",
          file_position: 0,
        },
      },
    },
  ],
  packages: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 18,
        xl: 18,
        xxl: 18,
      },
      field: {
        config: {
          name: "title",
          rules: [{ required: true, message: "Title is required!" }],
          label: "Title",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Title",
        },
      },
    },
    {
      type: "SimpleNumber",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 6,
        xl: 6,
        xxl: 6,
      },
      field: {
        config: {
          name: "price",
          rules: [{ required: true, message: "Price is required!" }],
          label: "Price",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Price",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "payments",
          label: "Partial Payments",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Leave empty for no partial payments",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "full_payment_discount",
          label: "Full Payment Discount",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Leave empty for no discount",
        },
      },
    },
    {
      type: "SimpleSelect",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "type",
          label: "Type",
          rules: [{ required: true, message: "Type is required!" }],
        },
        field_props: {
          placeholder: "Type",
          mode: "simple",
          showSearch: true,
          allowClear: true,
          max: 1,
        },
        indie: {
          option_key: "package_type",
        },
      },
    },
    {
      type: "SimpleBoolean",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "invite_only",
          label: "Invite Only",
        },
        field_props: {
          mode: "simple",
          placeholder: "Invite Only",
        },
        indie: {},
      },
    },

    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "total",
          label: "Total Available",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Leave empty for infinite",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "representatives",
          label: "Total Representatives",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Leave empty for infinite",
        },
      },
    },

    {
      type: "SimpleTextArea",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "description",
          label: "Description",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Enter package discription",
        },
      },
    },

    {
      type: "UploadImage",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "image",
        },
        deco: {
          aspect: 1 / 1,
          icon: "fas fa-camera-retro",
          hide: ["type", "folder"],
        },
        field_props: {
          placeholder: "Upload your image",
          label: "Image",
        },
        values: {},
        indie: {
          link: "papi_package_image",
          file_position: 0,
        },
      },
    },

    {
      type: "Accordion",

      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      label: "Amount Based Features",
      name: "amount_based_features",
      sub_fields: [
        {
          type: "SimpleNumber",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "social_media_postings",
              label: "Social Media Postings",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Amount",
            },
          },
        },
        {
          type: "SimpleNumber",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "m2m_emails",
              label: "Member 2 Member Emails",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Amount",
            },
          },
        },
        {
          type: "SimpleNumber",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "member_newsletter",
              label: "Members E-Newsletter",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Amount",
            },
          },
        },
        {
          type: "SimpleNumber",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "product_listing",
              label: "Product Listing",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Amount",
            },
          },
        },

        {
          type: "SimpleNumber",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "listing_categories",
              label: "Total Listing Categories",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Amount",
            },
          },
        },

        {
          type: "SimpleNumber",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "complimentary_events",
              label: "Complimentary Events",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Amount",
            },
          },
        },
        {
          type: "SimpleNumber",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "job_postings",
              label: "Job Postings",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Amount",
            },
          },
        },
        {
          type: "SimpleNumber",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "business_reviews",
              label: "Ghost Business Reviews",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Amount",
            },
          },
        },
        {
          type: "SimpleNumber",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "press_releases",
              label: "Articles and Press Releases",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Amount",
            },
          },
        },
        {
          type: "SimpleNumber",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "logo_at_event",
              label: "Logo at Events",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Amount",
            },
          },
        },
      ],
    },
    {
      type: "Accordion",

      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      label: "Activate Membershp Benefit Features",
      name: "panel_features",
      sub_fields: [
        {
          type: "SimpleCheckbox",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "direct_messages",
              label: "Direct Messages",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Direct Messages",
            },
          },
        },

        {
          type: "SimpleCheckbox",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "dedicated_manager",
              label: "Dedicated Relationship Manager",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Dedicated Relationship Manager",
            },
          },
        },
        {
          type: "SimpleCheckbox",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "company_profile",
              label: "Company Profile",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Company Profile",
            },
          },
        },

        {
          type: "SimpleCheckbox",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "sponsorship",
              label: "Event Sponsorship Opportunities",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Event Sponsorship Opportunities",
            },
          },
        },
        {
          type: "SimpleCheckbox",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "advertisement",
              label: "Advertisement",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Advertisement Opportunities",
            },
          },
        },
        {
          type: "SimpleCheckbox",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "speaker",
              label: "Speaker Invitation",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Speaker Invitation",
            },
          },
        },
        {
          type: "SimpleCheckbox",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "hall_of_fame",
              label: "Hall of Fame",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Hall of Fame",
            },
          },
        },

        {
          type: "SimpleCheckbox",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "town_halls",
              label: "Government Town Halls",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Government Town Halls",
            },
          },
        },
        {
          type: "SimpleSelect",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 24,
            xl: 24,
            xxl: 24,
          },
          field: {
            config: {
              name: "customized",
              label: "Custom Membership Benefits",
              showSearch: true,
              allowClear: true,
            },
            field_props: {
              placeholder: "Enter a name",
              mode: "tags",
            },

            indie: {},
          },
        },
      ],
    },
  ],
  business_branding: [
    {
      type: "UploadImage",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "logo",
          rules: [{ required: true, message: "Logo is required!" }],
        },
        deco: {
          aspect: 1 / 1,
          icon: "fas fa-camera-retro",
          hide: ["type", "folder"],
        },
        field_props: {
          placeholder: "Upload your logo",
          label: "Logo",
        },
        values: {},
        indie: {
          link: "papi_branding_logo",
          file_position: 0,
        },
      },
    },
    {
      type: "UploadImage",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "banner",
        },
        deco: {
          aspect: 6 / 1,
          icon: "fas fa-camera-retro",
          hide: ["type", "folder"],
        },
        field_props: {
          placeholder: "Upload your banner",
          label: "Banner",
        },
        values: {},
        indie: {
          link: "papi_branding_banner",
          file_position: 0,
        },
      },
    },
    {
      type: "UploadImage",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "poster",
        },
        deco: {
          aspect: 3 / 4,
          icon: "fas fa-camera-retro",
          hide: ["type", "folder"],
        },
        field_props: {
          placeholder: "Upload your poster",
          label: "Poster",
        },
        values: {},
        indie: {
          link: "papi_branding_poster",
          file_position: 0,
        },
      },
    },
  ],
  events2: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "name",
          rules: [{ required: true, message: "Name is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Name",
          label: "Name",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "formatted_address",
          rules: [{ required: true, message: "Name is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Name",
          label: "Name",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "icon",
          rules: [{ required: true, message: "Name is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Name",
          label: "Name",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "website",
          rules: [{ required: true, message: "Name is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Name",
          label: "Name",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "type",
          rules: [{ required: true, message: "Name is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Name",
          label: "Name",
        },
      },
    },

    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "public",
          rules: [{ required: true, message: "Name is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Name",
          label: "Name",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "published",
          rules: [{ required: true, message: "Name is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Name",
          label: "Name",
        },
      },
    },
  ],
  business_profile: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "name",
          label: "Business Name",
          rules: [{ required: true, message: "Name is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Business Name",
        },
      },
    },
    {
      type: "SimpleSelect",

      field: {
        config: {
          name: "types",
          label: "Types",
          rules: [{ required: true, message: "Types is required!" }],
        },
        field_props: {
          placeholder: "Types",
          mode: "tags",
          showSearch: true,
          allowClear: true,
          model_key: "types",
        },
        indie: {
          option_key: "types",
        },
        values: {},
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "formatted_address",
          rules: [
            { required: true, message: "Formatted address is required!" },
          ],
          label: "Formatted Address",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Formatted Address",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "international_phone_number",
          rules: [{ required: true, message: "Phone number is required!" }],
          label: "Phone Number",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Phone Number",
        },
      },
    },

    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "website",
          label: "Website",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Website",
        },
      },
    },

    {
      type: "SimpleBoolean",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "public",
          label: "Public",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Public",
        },
      },
    },
    {
      type: "SimpleBoolean",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "published",
          label: "Published",
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Published",
        },
      },
    },
  ],
  my_business: [
    {
      type: "SelfOrPlace",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          size: "large",
          name: "my_business",
        },
        field_props: {
          className: "dark_theme full_width",
          size: "large",
          placeholder: "Search for your business association",
        },
        indie: {
          max: 1,
        },
      },
    },
  ],
  business_hours: [
    {
      type: "SimpleSelect",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "days",
          label: "Days of the Week",
          rules: [{ required: true, message: "Days are required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Days",
          label: "Days",
          mode: "multiple",
          showSearch: true,
          allowClear: true,
        },

        indie: {
          option_key: "days",
          form: "day",
          title: "day",
          fields: ["name"],
          class: "margin_bottom_15",
          add_more: false,
          filter: {},
        },
      },
    },
    {
      type: "SimpleTime",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "time_start",
          label: "Time Open",
          rules: [{ required: true, message: "Time open is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Time Open",
        },
      },
    },
    {
      type: "SimpleTime",
      span: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12,
        xxl: 12,
      },
      field: {
        config: {
          name: "time_end",
          label: "Time Close",
          rules: [{ required: true, message: "Time close is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Time Close",
        },
      },
    },
    {
      type: "Accordion",

      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      label: "Restriction",
      name: "restriction",
      sub_fields: [
        {
          type: "SimpleTextArea",
          span: {
            xs: 24,
            sm: 24,
            md: 24,
            lg: 24,
            xl: 24,
            xxl: 24,
          },
          field: {
            config: {
              name: "notes",
              label: "Note to customers",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Note to customers",
            },
          },
        },
        {
          type: "SimpleDate",
          span: {
            xs: 24,
            sm: 24,
            md: 12,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "date_start",
              label: "Date Start",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Date Start",
            },
          },
        },
        {
          type: "SimpleDate",
          span: {
            xs: 24,
            sm: 24,
            md: 12,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: {
              name: "date_end",
              label: "Date End",
            },
            field_props: {
              className: "dark_theme full_width",
              placeholder: "Date End",
            },
          },
        },

        {
          type: "SimpleBoolean",
          span: {
            xs: 24,
            sm: 24,
            md: 12,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: { name: "published", label: "Published" },

            field_props: { placeholder: "Published" },
          },
        },
        {
          type: "SimpleBoolean",
          span: {
            xs: 24,
            sm: 24,
            md: 12,
            lg: 12,
            xl: 12,
            xxl: 12,
          },
          field: {
            config: { name: "public", label: "Public" },

            field_props: { placeholder: "Public" },
          },
        },
      ],
    },
  ],
  common: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "name",
          rules: [{ required: true, message: "Name is required!" }],
        },
        field_props: {
          className: "dark_theme full_width",
          placeholder: "Name",
          label: "Name",
        },
      },
    },
    {
      type: "SearchSelect",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
        xxl: 24,
      },
      field: {
        config: {
          name: "image",
        },
        deco: {
          aspect: 1 / 1,
          icon: "fas fa-camera-retro",
        },
        field_props: {
          placeholder: "Image",
          label: "Image",
        },
        indie: {
          add_new: true,
          page: "sell_stuff",
          option_key: "file",
          section: "file",
          title: "File",
        },
      },
    },

    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "short_description",
        },
        field_props: {
          placeholder: "Enter product  short description",
          label: "Short Description",
          className: "dark_theme full_width",
          input_type: "text_area",
        },
        values: {
          devValue: "description is this false or true or long but string.",
        },
      },
    },
  ],

  login: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          label: "Email",
          className: "dark_theme",
          tooltip: {
            title: "Must include a valid email address",
          },
          name: "email",
          rules: [
            { required: true, message: "Please enter an email!" },
            { type: "email", message: "This must be an email address!" },
          ],
        },
        field_props: {
          className: "dark_input full_width",
          size: "large",
          placeholder: "Enter your email..",
        },
      },
    },
    {
      type: "SimplePassword",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          label: "Password",
          className: "dark_theme",
          tooltip: {
            title: "Password must be at least 6 digits",
          },
          name: "password",
          rules: [{ required: true, message: "Password is required!" }],
        },
        field_props: {
          className: "dark_input full_width",
          size: "large",
          placeholder: "Enter your password..",
          type: "password",
        },
      },
    },
  ],
  register: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          label: "Name",
          className: "dark_theme",
          tooltip: {
            title: "Must include your full name",
          },
          name: "name",
          rules: [{ required: true, message: "Please enter your full name!" }],
        },
        field_props: {
          className: "dark_input full_width",
          size: "large",
          placeholder: "Enter your name..",
        },
      },
    },
    {
      type: "SimplePhoneNumber",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          label: "Cell Phone Number",
          className: "dark_theme",
          tooltip: {
            title:
              "Must include your cell phone number for 2 factor authentication",
          },
          name: "phone",
          rules: [
            { required: true, message: "Please enter your cell phone number!" },
          ],
        },
        field_props: {
          className: "dark_input full_width",
          size: "large",
          placeholder: "Phone Number",
        },
      },
    },
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          label: "Email",
          className: "dark_theme",
          tooltip: {
            title: "Must include a valid email address",
          },
          name: "email",
          rules: [
            { required: true, message: "Please enter an email!" },
            { type: "email", message: "This must be an email address!" },
          ],
        },
        field_props: {
          className: "dark_input full_width",
          size: "large",
          placeholder: "Enter your email..",
        },
      },
    },
    {
      type: "SimplePassword",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          label: "Password",
          className: "dark_theme",
          tooltip: {
            title: "Password must be at least 6 digits",
          },
          name: "password",
          rules: [{ required: true, message: "Password is required!" }],
        },
        field_props: {
          className: "dark_input full_width",
          size: "large",
          placeholder: "Enter your password..",
          type: "password",
        },
      },
    },
    {
      type: "SimplePassword",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          label: "Confirm Password",
          className: "dark_theme",
          tooltip: {
            title: "Confirm password must match password",
          },
          name: "confirm_password",
          rules: [{ required: true, message: "Confirm Password is required!" }],
        },
        field_props: {
          className: "dark_input full_width",
          size: "large",
          placeholder: "Enter your password..",
          type: "password",
        },
      },
    },
  ],

  forgot_password: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          label: "Email",
          className: "dark_theme",
          tooltip: {
            title: "Must include a valid email address",
          },
          name: "email",
          rules: [
            { required: true, message: "Please enter an email!" },
            { type: "email", message: "This must be an email address!" },
          ],
        },
        field_props: {
          className: "dark_input full_width",
          size: "large",
          placeholder: "Enter your email..",
        },
      },
    },
  ],

  resend_code: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          label: "Email",
          className: "dark_theme",
          tooltip: {
            title: "Must include a valid email address",
          },
          name: "email",
          rules: [
            { required: true, message: "Please enter an email!" },
            { type: "email", message: "This must be an email address!" },
          ],
        },
        field_props: {
          className: "dark_input full_width",
          size: "large",
          placeholder: "Enter your email..",
        },
      },
    },
  ],
  verification: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          className: "dark_theme",
          tooltip: {
            title: "Must include a valid confirmation code",
          },
          label: "Confirmation Code",
          name: "confirmation_code",
          rules: [
            { required: true, message: "Please enter your confirmation code" },
          ],
        },
        field_props: {
          className: "dark_input full_width text_center",
          size: "large",
          placeholder: "Confirmation Code",
          maxLength: 6,
        },
        indie: {
          count: 6,
        },
      },
    },
  ],

  password_reset: [
    {
      type: "SimplePassword",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          name: "password",
          label: "New Password",
          rules: [{ required: true, message: "New Password is required!" }],
        },
        field_props: {
          placeholder: "Enter a New Password",
          label: "Confirm Password",
          type: "password",
          size: "large",
        },
      },
    },
    {
      type: "SimplePassword",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          label: "Confirm Password",
          name: "confirm_password",
          rules: [{ required: true, message: "Confirm Password is required!" }],
        },
        field_props: {
          placeholder: "Confirm your password..",
          label: "Confirm Password",
          type: "password",
          size: "large",
        },
      },
    },
  ],

  recovery_check: [
    {
      type: "SimpleInput",
      span: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24,
        xl: 24,
        xxl: 24,
      },
      field: {
        config: {
          className: "dark_theme",
          tooltip: {
            title: "Must include a valid Recovery code",
          },
          label: "Recovery Code",
          name: "recovery_token",
          rules: [
            { required: true, message: "Please enter your Recovery code" },
          ],
        },
        field_props: {
          className: "dark_input full_width text_center",
          size: "large",
          placeholder: "000000",
          maxLength: 6,
        },
        indie: {
          count: 6,
        },
      },
    },
  ],
};

let change_key = {
  color: { key: "common" },
  home_page_address: { key: "address" },
  special_service_hours: { key: "business_hours" },
  offline_shopping_hours: { key: "business_hours" },
  online_ordering_hours: { key: "business_hours" },
  condition: { key: "common" },
  lifting: { key: "common" },
  signup: { key: "user" },
  resend_confirmation: { key: "common" },
};

const GetFieldDict = (dict_key, callback) => {
  let got_key = dict_key;
  let changed_key = change_key[got_key];
  if (changed_key) {
    got_key = changed_key.key;
  }
  let output = dict[got_key];

  if (!output) {
    output = dict.common;
  }
  if (changed_key && changed_key.remove_keys) {
    output = output.filter((field) => {
      return (
        !changed_key.remove_keys.includes(
          field.field && field.field.config.name
        ) && !changed_key.remove_keys.includes(field.name)
      );
    });
  }
  if (callback) {
    output = callback(output);
  }
  return output;
};

export default GetFieldDict;
export const dataTransformation = (data, dict_key) => {
  let output = {};
  let files = ["UploadImage"];
  const gotFormConfig = GetFieldDict(dict_key);

  const addIdOnly = (obj) => {
    let output = { ...obj };
    // find the object type.
    gotFormConfig.forEach((config) => {
      if (files.includes(config.type)) {
        let name = config.field.config.name;
        if (name) {
          let file_obj = obj[name];
          let file_id = [];
          if (file_obj) {
            if (Array.isArray(file_obj)) {
              file_obj.forEach((sing_file_obj) => {
                file_id.push(sing_file_obj._id);
              });
            } else {
              file_id = [file_obj._id];
            }
            output[name] = file_id;
          }
        }
      }
    });

    return output;
  };

  if (Array.isArray(data)) {
    output = [];

    data.forEach((obj) => {
      let new_obj = addIdOnly(obj);
      output.push(new_obj);
    });
  } else {
    let new_obj = addIdOnly(data);

    output = new_obj;
  }
  console.log(output, "testing data gotFormConfig");

  return output;
};
