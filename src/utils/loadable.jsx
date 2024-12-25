import { lazy, Suspense } from "react";

export const lazyLoad = (
  importFunc,
  selectorFunc,
  opts = { fallback: null }
) => {
  let lazyFactory = importFunc;

  if (selectorFunc) {
    lazyFactory = () =>
      importFunc().then((module) => ({ default: selectorFunc(module) }));
  }

  const LazyComponent = lazy(lazyFactory);

  // eslint-disable-next-line react/display-name
  return (props) => (
    <Suspense fallback={opts.fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
