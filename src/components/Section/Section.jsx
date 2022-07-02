import PropTypes from "prop-types";
import { TitleStatics } from "../../App.styled";

function Section({ title, children }) {
  return (
    <TitleStatics>
      <h2>{title}</h2>
      {children}
    </TitleStatics>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
