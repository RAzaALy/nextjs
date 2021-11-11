import React from "react";

const cooky = ({ preview }) => {
  return (
    <div>
      <h1>{preview}</h1>
    </div>
  );
};

export default cooky;

export const getStaticProps = async (context) => {
  return {
    props: {
      preview: context.preview
        ? "LIst of dRaft preview"
        : "List Of Preview Data",
    },
  };
};
