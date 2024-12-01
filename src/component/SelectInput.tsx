import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FormControl, FormHelperText, MenuItem, Tooltip } from "@mui/material";
import { useController } from "react-hook-form";
import Select from "./designed_components/DesignedSelect";
import { Option, SelectInputProps } from "../utils/componentUtils";
const SelectInput = ({
  control,
  name,
  myOnChange,
  rules = {},
  options,
  isDisabled,
}: SelectInputProps) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });
  const charLimit = 60;
  const placeholder = "Select Option"
  console.log("error", fieldState.error);
  return (
    <FormControl
      disabled={isDisabled}
      style={{ width: "100%" }}
      error={!!fieldState.error?.message}
    >
      <Select
        displayEmpty
        value={field.value}
        onChange={myOnChange ? myOnChange : field.onChange} // send value to hook form
        inputRef={field.ref}
        // fullWidth={true}
        renderValue={field.value !== "" ? undefined : () => placeholder}
        IconComponent={KeyboardArrowDownIcon}
      >
        {options &&
          options?.map((option) => {
            if (typeof option === "object") {
              const { uuid, name } = option as Option;
              const isString = typeof name === "string";
              const displayValue =
                isString && name.length > charLimit ? (
                  <Tooltip title={name}>
                    <span>{name.slice(0, charLimit) + "..."}</span>
                  </Tooltip>
                ) : (
                  name
                );
              return (
                <MenuItem key={uuid} value={uuid}>
                  {isString ? displayValue : name}
                </MenuItem>
              );
            } else {
              return (
                <MenuItem key={option} value={option}>
                  {typeof option === "string" && option?.length > charLimit ? (
                    <Tooltip title={option}>
                      <span>{option?.slice(0, charLimit) + "..."}</span>
                    </Tooltip>
                  ) : (
                    option
                  )}
                </MenuItem>
              );
            }
          })}
      </Select>
      <FormHelperText className="common-error-class">
        {fieldState?.error?.message ?? " "}
      </FormHelperText>
    </FormControl>
  );
};

export default SelectInput;
