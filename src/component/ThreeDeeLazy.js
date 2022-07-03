import React, { useState, useEffect, Suspense, lazy } from "react";

const ThreeDee = lazy(() => import("./ThreeDee"));

const ThreeLazy = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {!isMounted ? null : (
        <Suspense fallback={null}>
          <ThreeDee />
        </Suspense>
      )}
    </>
  );
};
export default ThreeLazy;
