import PropTypes from "prop-types";
import imgSmall1 from "./images/img-hottest-small-1.png";
import imgSmall2 from "./images/img-hottest-small-2.png";
import imgSmall3 from "./images/img-hottest-small-3.png";
import imgSmall4 from "./images/img-hottest-small-4.png";

export const HottestCategory = ({ hottestCategoryData }) => {
  return (
    <div className="w-full bg-[#0000000D] rounded-[28px] overflow-hidden p-4 grid grid-cols-2 gap-4">
      <div className="flex flex-col">
        <img
          className="w-full  object-cover rounded-lg mb-2"
          src={hottestCategoryData.image1Url}
          alt="Big"
        />
        <div className="grid grid-cols-2 gap-2">
          <img
            className="w-full  object-cover rounded-lg"
            src={imgSmall1}
            alt="Small 1"
          />
          <img
            className="w-full  object-cover rounded-lg"
            src={imgSmall2}
            alt="Small 2"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-2 mb-2">
          <img
            className="w-full object-cover rounded-lg"
            src={imgSmall3}
            alt="Small 3"
          />
          <img
            className="w-full object-cover rounded-lg"
            src={imgSmall4}
            alt="Small 4"
          />
        </div>
        <img
          className="w-full  object-cover rounded-lg"
          src={hottestCategoryData.image2Url}
          alt="Big"
        />
      </div>
    </div>
  );
};

HottestCategory.propTypes = {
  hottestCategoryData: PropTypes.shape({
    image1Url: PropTypes.string.isRequired,
    image2Url: PropTypes.string.isRequired,
  }).isRequired,
};
