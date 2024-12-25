import { lazyLoad } from "../../../utils/loadable";

export const ComingSoon = lazyLoad(
  () => import("./index"),
  (module) => module.default
);
