import { useMemo, useCallback } from "react";
import { Card, Col, Typography, Row } from "antd";

import { getDay, getMonth, getYear } from "../../utils/dateUtils";
import { forecastIcons } from "../../utils/iconUtils";
import {
  getTemperature,
  transformToCelsius,
} from "../../utils/temperatureUtils";

import Wind from "../../img/wind.png";

import "./dailyForecast.css";

const DailyForecast = ({
  forecast: {
    summary,
    time,
    windSpeed,
    temperatureMax,
    temperatureMin,
    icon,
    uvIndex,
  },
  value,
  openModal,
}) => {
  const day = useMemo(() => getDay(time), [time]);
  const month = useMemo(() => getMonth(time), [time]);
  const year = useMemo(() => getYear(time), [time]);
  const minTemp = useMemo(
    () => (value === 1 ? transformToCelsius(temperatureMin) : temperatureMin),
    [value, temperatureMin]
  );
  const maxTemp = useMemo(
    () => (value === 1 ? transformToCelsius(temperatureMax) : temperatureMax),
    [value, temperatureMax]
  );
  const temperature = useMemo(() => getTemperature(minTemp, maxTemp), [
    minTemp,
    maxTemp,
  ]);

  const openModalHandler = useCallback(() => {
    openModal(uvIndex);
  }, [openModal, uvIndex]);

  return (
    <Card
      hoverable
      cover={
        <img
          src={forecastIcons[icon]}
          alt={icon}
          className="daily-forecast-img"
        />
      }
      className="daily-forecast"
      onClick={openModalHandler}
    >
      <div className="daily-forecast-body">
        <Row className="daily-forecast-date-row">
          <Col span={12} className="daily-forecast-day">
            {day}
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24} className="daily-forecast-date-item">
                {month}/
              </Col>
              <Col span={24} className="daily-forecast-date-item">
                {year}
              </Col>
            </Row>
          </Col>
        </Row>
        <Typography className="daily-forecast-summary">{summary}</Typography>
        <Row className="daily-forecast-wind">
          <Col>
            <Typography>{windSpeed} metres per second</Typography>
          </Col>
          <Col>
            <img src={Wind} alt="wind" className="wind-speed-img" />
          </Col>
        </Row>
        <Typography className="daily-forecast-temperature">
          {temperature} {value === 1 ? <>&#8451;</> : <>&#8457;</>}
        </Typography>
      </div>
    </Card>
  );
};

export default DailyForecast;
