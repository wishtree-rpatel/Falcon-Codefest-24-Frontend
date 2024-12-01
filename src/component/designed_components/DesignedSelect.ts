import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";

const DesignedSelect = styled(Select)({
  "&": {
    width: "100%",
    ":hover fieldset": {
      borderColor: "#DDDDDD !important",
    },

    "& .Mui-disabled": {
      position: "relative",
      zIndex: "1",
      "-webkit-text-fill-color": "#585E63 !important",
      fontWeight: "600",
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "14px",
      fontFamily: "'Open Sans', 'sans-serif'",
    },

    "& .MuiSelect-outlined": {
      padding: "8px",
      lineHeight: "22px",
      paddingLeft: "15px",
    },
    "& fieldset": {
      border: "1px solid #DDDDDD",
    },
    "& input.Mui-disabled": {
      "-webkit-text-fill-color": "#585E63 !important",
      fontWeight: "600",
    },
    "&.Mui-disabled fieldset": {
      border: "1px solid #DDDDDD !important",
      opacity: "100%",
      background: "rgba(229, 228, 226, 0.3)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#F8660B",
      borderWidth: "1px",
    },
    "&.Mui-error fieldset": {
      border: "1px solid #B70000 !important",
    },
    "&.Mui-disabled svg": {
      display: "none",
    },
    "&.Mui-focused .MuiSvgIcon-root": {
      color: "#F8660B",
    },
  },
  "& p.MuiFormHelperText-root": {
    color: "#B70000",
    fontSize: "10px",
    lineHeight: "12px",
    marginTop: "5px",
    marginLeft: "0",
    fontFamily: "'Open Sans', 'sans-serif'",
  },
});
export default DesignedSelect;
