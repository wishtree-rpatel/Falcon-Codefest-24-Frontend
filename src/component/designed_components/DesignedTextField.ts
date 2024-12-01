import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const DesignedTextField = styled(TextField)({
  "&.MuiTextField-root": {
    marginBottom: "30px",
    width: "100%",
    height: "40px",
  },

  "& p.MuiFormHelperText-root": {
    color: "#B70000",
    fontSize: "10px",
    lineHeight: "12px",
    marginTop: "5px",
    marginLeft: "0",
    fontFamily: "'Open Sans', 'sans-serif'",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      background: "transparent",
      borderColor: "#DDDDDD",
      borderRadius: "6px",
    },
    "& input": {
      padding: "9.5px 14px",
      color: "#585E63",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: "'Open Sans', 'sans-serif'",
    },
    "& textarea": {
      color: "#585E63",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: "'Open Sans', 'sans-serif'",
    },
    "& textarea.Mui-disabled": {
      "-webkit-text-fill-color": "#585E63 !important",
      fontWeight: "600",
    },
    "& input.Mui-disabled": {
      "-webkit-text-fill-color": "#585E63 !important",
      fontWeight: "600",
    },
    "&:hover fieldset": {
      borderColor: "#DDDDDD",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#F8660B",
      borderWidth: "1px",
    },
    "&.Mui-error fieldset": {
      border: "1px solid #B70000 !important",
    },
    "&.Mui-disabled": {
      opacity: "100%",
      background: "rgba(229, 228, 226, 0.3)",
    },
    "&.Mui-disabled fieldset": {
      borderColor: "#DDDDDD !important",
    },
  },
  "&.multiline-textfiled": {
    height: "86px",
    "& .MuiOutlinedInput-root": {
      padding: "8.5px 14px",
    },
  },
  "&.search-textfield": {
    height: "32px",
    marginBottom: "0",
    width: "245px",
    "& .MuiOutlinedInput-root ": {
      height: "32px",
    },
    "& .MuiSvgIcon-root": {
      color: "#C5CDD4",
      width: "18px",
      height: "18px",
    },
    "& input": {
      paddingLeft: "5px",
    },
    "& fieldset": {
      borderRadius: "8px",
    },
  },
});
export default DesignedTextField;
