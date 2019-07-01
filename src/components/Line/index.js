import React from "react";

import { style } from "@material-ui/system";

function Line({ type, compList }) {
  return (
    <div
      style={{
        borderLeft: type == "sup" || type == "adm" ? "thin solid #ff0000" : "",
        height: "137px",
        position: "relative",
        top: -165,
        left: 90
      }}
    >
      &nbsp;
    </div>
  );
}

export default Line;
