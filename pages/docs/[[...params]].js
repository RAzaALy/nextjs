import { useRouter } from "next/dist/client/router";
import React from "react";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  // console.log(params, "params");/feature1/concept1
  if (params.length === 2) {
    return (
      <h2>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h2>
    );
  } else if (params.length === 1) {
    return <h2>Viewing docs for feature {params[0]}</h2>;
  }
  return (
    <div>
      <h1>Docs Home Page</h1>
    </div>
  );
};

export default Doc;
