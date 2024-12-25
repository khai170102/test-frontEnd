import { lazyLoad } from "../../../utils/loadable";

export const GamePage = lazyLoad(
  () => import("./index"),
  (module) => module.default
);
