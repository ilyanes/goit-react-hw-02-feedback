import PropTypes from "prop-types";
export const Statistics = ({ data }) => {
  return (
    <>
      <p>
        Good:<span>{data.Good}</span>
      </p>
      <p>
        Neutral:<span>{data.Neutral}</span>
      </p>
      <p>
        Bad:<span>{data.Bad}</span>
      </p>
      <p>
        Total:<span>{data.total}</span>
      </p>
      <p>
        Positive feedback:
        <span>{Number(data.positive.toFixed())}% </span>
      </p>
    </>
  );
};
Statistics.propTypes = {
  data: PropTypes.object,
};
