import PropTypes from "prop-types";
import ArrowRight from "./images/icon/ArrowRight";

export function WrapContentRight(props) {
  return (
    <div className="mb-28 w-full">
      <div className="font-semibold text-[28px] leading-7 mb-8 flex justify-between items-center">
        <p>{props.title}</p>
        <ArrowRight className="text-black hover:opacity-50" />
      </div>
      {props.children}
    </div>
  );
}
WrapContentRight.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};
