import TextField from "./designed_components/DesignedTextField";
import { UseControllerProps, useController } from "react-hook-form";

interface TextInputProps extends UseControllerProps<any> {
  myOnChange?: (...args: any) => void;
  isDisabled?: boolean;
  multiline?: boolean;
}
const TextInput = ({
  name,
  control,
  rules = {},
  myOnChange,
  defaultValue = "",
  isDisabled = false,
  multiline = false,
}: TextInputProps) => {

  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });
  
  const maxLengthValue = (rules.maxLength as Record<string, any>)?.value; // Cast to Record<string, any>

  
  const handleBlur = (): void => {
    if (typeof field?.value === "string") {
      const trimmedValue = field.value.trim();
      field.onChange(trimmedValue);
    }
  };
  return (
    <TextField
      error={fieldState.error?.message ? true : false}
      multiline={multiline}
      className={multiline ? "multiline-textfiled" : ""}
      rows={3}
      // maxRows={4}
      disabled={isDisabled}
      value={field.value}
      onChange={myOnChange ? myOnChange : field.onChange}
      onBlur={handleBlur}
      inputRef={field.ref}
      inputProps={{ maxLength: maxLengthValue }}
      placeholder="Type Here"
      helperText={fieldState?.error?.message ?? " "}
    />
  );
};

export default TextInput;
