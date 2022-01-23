import React, { Fragment } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { connect } from "react-redux";
import { create, read } from "../../redux/actions/master";
import { Input } from "antd";
import powered_by_google_on_white_hdpi from "../../assets/icon/powered_by_google_on_white_hdpi.png";
import powered_by_google_on_non_white_hdpi from "../../assets/icon/powered_by_google_on_non_white_hdpi.png";
import "./location.scss";
import { FA } from "../../utils/product";
import { Link } from "react-router-dom";
import { Spin } from "antd";
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      res_data: [],
      redirect: false,
    };
  }

  getGooglePlaceDetail = (googlePlaceId, callback) => {
    if (googlePlaceId) {
      let service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );

      service.getDetails({ placeId: googlePlaceId }, (place, status) => {
        callback(place, googlePlaceId);
        this.setState({
          address: "",
        });
      });
    }
  };
  handleChange = async (address) => {
    if (address.length % 9 === 0) {
      let res = await this.props.read({
        key: "read_searched_place",
        query: `?name=${address}`,
      });
      this.setState({ address, res_data: (res && res.data) || [] });
    } else {
      this.setState({ address, res_data: this.state.res_data });
    }
  };

  handleSelect = async (address, googlePlaceId) => {
    const Go = async () => {
      const selectHandled = async (place, place_id) => {
        const payload = JSON.stringify(place);

        let business_site = await this.props.create({
          payload,
          key: "searched_place",
          dispatch_key: this.props.redirect
            ? "business_site"
            : "business_site_no_redirect",
          params: [this.props.reason || "customer"],
          replace: true,
        });
        if (this.props.redirect && business_site && business_site.data) {
          await this.props.read({
            key: "business_product",
            replace: true,
            params: [business_site.data._id, "product", "_id"],
          });
        }
        if (this.props.handleSelect) {
          this.props.handleSelect(payload, place_id, business_site);
        }
      };

      await this.getGooglePlaceDetail(googlePlaceId, selectHandled);

      if (this.props.redirect) {
        this.setState({ redirect: true }, () => {
          this.setState({ redirect: googlePlaceId });
        });
        let path = `/site/store/${this.state.redirect}?type=place_id`;
        this.props.history.push(path);
      }
      this.setState({ loading: false });
    };

    if (!this.props.no_loading) {
      this.setState({ loading: true }, () => {
        Go();
      });
    } else {
      Go();
    }
  };

  onBlur = () => {
    this.setState({
      address: "",
    });
    this.props.onBlur && this.props.onBlur();
  };
  onFocus = (payload) => {
    this.setState(payload);
    this.props.onFocus && this.props.onFocus();
  };
  setSuggestions = (payload) => {
    this.setState(payload);
  };
  render() {
    const resultStyle = {
      position: "absolute",
      zIndex: 2,
      width: "100%",
      top: "35px",
      marginTop: 7,
      marginLeft: -3,
    };
    let power_by_dict = {
      dark: powered_by_google_on_white_hdpi,
      light: powered_by_google_on_non_white_hdpi,
    };
    let config = this.props.config || {};

    let goolge_credit =
      power_by_dict[config.google_credit] || power_by_dict.dark;

    let input_container_props = this.props.input_container_props || {};

    // pass on a wrapper such as Form.Item if exists
    let Wrapper = this.props.wrapper || Fragment;
    let wrapper_components = this.props.wrapper_components || {};

    return (
      <div>
        {!this.state.loading ? (
          <div>
            <div>
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => {
                  return (
                    <div
                      style={{ position: "relative" }}
                      {...input_container_props}
                    >
                      <Wrapper {...wrapper_components}>
                        <Input
                          {...getInputProps({
                            placeholder:
                              this.props.placeholder ||
                              "Enter a place or an address",
                          })}
                          // value={this.state.address}
                          disabled={this.props.disabled}
                          onFocus={() => this.onFocus({ suggestions })}
                          onBlur={this.onBlur}
                          className={this.props.className}
                        />
                      </Wrapper>
                      <Link to={`/1`}>
                        <div style={resultStyle}>
                          {this.state.address &&
                            suggestions.map((suggestion, index) => {
                              let registered = this.state.res_data.find(
                                (item) => item.place_id === suggestion.placeId
                              );

                              let className = suggestion.active
                                ? "suggestion-item--active"
                                : "suggestion-item";

                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    className,
                                  })}
                                  key={index}
                                >
                                  {registered ? (
                                    <div className="full_width  ">
                                      <FA
                                        className="success full_width"
                                        title={suggestion.description}
                                        icon={"fas  fa-money-bill-alt"}
                                      />
                                    </div>
                                  ) : (
                                    <FA
                                      className=" full_width "
                                      title={suggestion.description}
                                      icon={"far fa-money-bill-alt  "}
                                    />
                                  )}
                                </div>
                              );
                            })}
                        </div>
                      </Link>
                    </div>
                  );
                }}
              </PlacesAutocomplete>
            </div>
            <div className="powered_by_google_on_white_hdpi_container">
              <img
                src={goolge_credit}
                className="powered_by_google_on_white_hdpi"
                alt="mallsett power by google search"
              />
            </div>{" "}
          </div>
        ) : (
          <Spin />
        )}
      </div>
    );
  }
}

export default connect(null, { create, read })(LocationSearchInput);
