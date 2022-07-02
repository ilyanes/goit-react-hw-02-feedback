import PropTypes from "prop-types";
export const Buttons = ({ buttons, onClick }) => {
  return (
    <>
      {buttons.map((button) => {
        return (
          <button key={button} onClick={onClick} name={button}>
            {button}
          </button>
        );
      })}
    </>
  );
};

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};
