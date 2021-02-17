import { Typography } from "antd";
import "./error.css";

const Error = ({ error }) => (
  <div className="error">
    <Typography type="danger">{error}</Typography>
  </div>
);

export default Error;
