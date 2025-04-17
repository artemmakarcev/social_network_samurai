import { Suspense } from "react";
import Preloader from "../components/Common/Preloader/Preloader";

export const withSuspense = (LazyComponent) => {
  return (props) => {
    return (
      <Suspense fallback={<Preloader className="PreLoader" />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};
