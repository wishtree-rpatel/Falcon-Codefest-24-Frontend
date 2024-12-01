import { Typography } from "@mui/material";
import React from "react";

export default function NoDataFound() {
  return (
    <div className="error-page-wrapper">
      <div>
        {/* <img src={Image404} width="291px" height="138px" /> */}
      </div>
      <Typography className="error-page-heading">No Data Found</Typography>
    </div>
  );
}
