import PropTypes from "prop-types";

export const HotGameCard = ({ gameData }) => {
  return (
    <div className="w-full overflow-hidden  ">
      <img
        className="w-full rounded-lg"
        src={gameData.imageUrl}
        alt={gameData.title}
      />
      <div className="mt-3 flex justify-between items-center">
        <div className="flex">
          <img
            className=" rounded-lg w-[90px] h-[90px] mr-3"
            src={gameData.imageSmallUrl}
            alt={gameData.title}
          />
          <span>
            <h2 className="font-semibold text-lg mb-2">{gameData.title}</h2>
            <p className="text-black opacity-50 text-sm font-normal line-clamp-2 ">
              {gameData.description}
            </p>
          </span>
        </div>
        <button className="bg-whit border border-gray-400 hover:opacity-50 text-black font-semibold text-sm py-1 px-3 rounded">
          View
        </button>
      </div>
    </div>
  );
};
HotGameCard.propTypes = {
  gameData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSmallUrl: PropTypes.string.isRequired,
  }).isRequired,
};
