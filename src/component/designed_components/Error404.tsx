import { Typography } from "@mui/material";
import Image404 from "../../assets/error-404.svg";

export default function Error404() {
  return (
    <div className="main-container error-page-container">
      <div className="main-wrapper ">
        <div className="error-page-wrapper">
          <div>
            {/* <img src={Image404} width="354px" height="40px" /> */}
          </div>
          <Typography className="error-page-heading">Error 404</Typography>
        </div>
      </div>
    </div>
  );
}
