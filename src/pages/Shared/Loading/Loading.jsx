import React from "react";
import Lottie from "lottie-react";
import loading from "../../../assets/loading/loading-anim.json";
const Loading = () => {
  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Lottie style={{ width: "250px" }} animationData={loading} loop={true} />
    </div>
  );
};

export default Loading;
