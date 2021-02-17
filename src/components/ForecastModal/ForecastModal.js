import { Modal, Typography } from "antd";

import { forecastIcons } from "../../utils/iconUtils";

import "./forecastModal.css";

const ForecastModal = ({ isModalVisible, closeModal, modalInfo }) => {
  const {
    humidity,
    summary,
    icon,
    pressure,
    visibility,
    windSpeed,
    cloudCover,
  } = modalInfo;
  return (
    <Modal
      title="Forecast"
      visible={isModalVisible}
      onCancel={closeModal}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      className="forecast-modal"
    >
      <div className="forecast-modal-body">
        <img src={forecastIcons[icon]} alt="icon" />
        <Typography className="forecast-modal-summary">{summary}</Typography>
        <Typography>Humidity: {humidity}</Typography>
        <Typography>Pressure: {pressure}</Typography>
        <Typography>Visibility: {visibility}</Typography>
        <Typography>Cloud Cover: {cloudCover}</Typography>
        <Typography>Wind Speed: {windSpeed}</Typography>
      </div>
    </Modal>
  );
};

export default ForecastModal;
