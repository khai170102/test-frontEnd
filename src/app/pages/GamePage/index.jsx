import {
  Banner,
  HotGameCard,
  HottestCategory,
  SidebarGame,
  WrapContentRight,
} from "./components";
import { hotGameDatas, hottestCategoryDatas } from "./fakeData";
import useSlice from "../../../hooks/useSlice";

export default function GamePage() {
  const sliceSize = 1;
  const intervalTime = 3000;
  const { currentSlice: currentHotGames } = useSlice(
    hotGameDatas,
    sliceSize,
    intervalTime
  );

  const { currentSlice: currentHottestCategories } = useSlice(
    hottestCategoryDatas,
    sliceSize,
    intervalTime
  );
  return (
    <div className="w-full h-full bg-cover">
      <Banner />

      {/* game container */}
      <div className="h-screen flex flex-col sm:flex-row sm:justify-center sm:items-start mx-[10%] my-[5%]">
        <div className="sm:grid sm:grid-cols-4 sm:gap-8 w-full">
          {/* Left: Sidebar */}
          <div className="sm:col-span-1 sm:mt-4">
            <SidebarGame />
          </div>

          {/* Right: Game Content */}
          <div className="md:col-span-3">
            <WrapContentRight title="Hot Game">
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {hotGameDatas.slice(0, 2).map((game, index) => (
                  <HotGameCard key={index} gameData={game} />
                ))}
              </div>

              <div className="flex overflow-hidden sm:hidden">
                {currentHotGames.map((game, index) => (
                  <div
                    key={index}
                    className={`transition-transform duration-500 ease-in-out transform `}
                  >
                    <HotGameCard gameData={game} />
                  </div>
                ))}
              </div>
            </WrapContentRight>

            <WrapContentRight title="Hottest Category">
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {hottestCategoryDatas.slice(0, 2).map((game, index) => (
                  <HottestCategory key={index} hottestCategoryData={game} />
                ))}
              </div>

              <div className="flex overflow-hidden sm:hidden">
                {currentHottestCategories.map((game, index) => (
                  <div
                    key={index}
                    className={`transition-transform duration-500 ease-in-out transform `}
                  >
                    <HottestCategory hottestCategoryData={game} />
                  </div>
                ))}
              </div>
            </WrapContentRight>
          </div>
        </div>
      </div>
    </div>
  );
}
