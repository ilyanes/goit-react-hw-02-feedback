import PropTypes from "prop-types";

function Statistics({ total, percentage, options: { good, neutral, bad } }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {percentage}</p>
    </div>
  );
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

export default Statistics;
