import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Radio, Button } from "antd";

import Loader from "../../components/Loader";
import DailyForecast from "../../components/DailyForecast";
import Error from "../../components/Error";
import ForecastModal from "../../components/ForecastModal";

import {
  fetchForecastStart,
  paginateForecast,
} from "./actions/forecast.actions";
import {
  forecastFetchErrorSelector,
  forecastFetchIsStatusInProgress,
  forecastItemsDataSelector,
  forecastCurrentItemsDataSelector,
} from "./selectors/forecast.selectors";

import "./forecast.css";

export class Forecast extends Component {
  state = {
    value: 1,
    isModalVisible: false,
    modalInfo: {},
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  componentDidMount() {
    if (navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        this.fetchForecast,
        console.error
      );
    }
  }

  fetchForecast = ({ coords: { latitude, longitude } }) => {
    const { getForecast } = this.props;
    getForecast(latitude, longitude);
  };

  openModal = (id) => {
    this.setState({ isModalVisible: true });
    this.findForecast(id);
  };

  findForecast = (id) => {
    const { items } = this.props;
    const chosenItem = items.find((item) => item.uvIndex === id);
    this.setState({ modalInfo: chosenItem });
  };

  closeModal = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };
    const { loading, items, currentItems, error, paginate } = this.props;
    const { value, isModalVisible, modalInfo } = this.state;
    return (
      <>
        {loading && <Loader />}
        {!loading && !error && currentItems && (
          <>
            <Radio.Group
              onChange={this.onChange}
              value={value}
              className="radio-group"
            >
              <Radio style={radioStyle} value={1}>
                Celsius
              </Radio>
              <Radio style={radioStyle} value={2}>
                Farengate
              </Radio>
            </Radio.Group>
            <Row>
              {currentItems.map((forecast) => (
                <Col xs={24} sm={12} md={8} lg={6} key={forecast.time}>
                  <DailyForecast
                    forecast={forecast}
                    value={value}
                    openModal={this.openModal}
                  />
                </Col>
              ))}
            </Row>
            {items.length !== currentItems.length && (
              <div className="forecast-button">
                <Button type="primary" onClick={paginate}>
                  Load more
                </Button>
              </div>
            )}
            <ForecastModal
              isModalVisible={isModalVisible}
              closeModal={this.closeModal}
              modalInfo={modalInfo}
            />
          </>
        )}
        {!error && !loading && items.length === 0 && <div>No forecast</div>}
        {error && <Error error={error} />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: forecastItemsDataSelector(state),
  currentItems: forecastCurrentItemsDataSelector(state),
  loading: forecastFetchIsStatusInProgress(state),
  error: forecastFetchErrorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getForecast: (lat, lng) => dispatch(fetchForecastStart(lat, lng)),
  paginate: () => dispatch(paginateForecast()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
