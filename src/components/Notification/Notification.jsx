import PropTypes from "prop-types";
import { StyleNoFeedback } from "../../App.styled";

function Notification({ message }) {
  return <StyleNoFeedback>{message}</StyleNoFeedback>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
