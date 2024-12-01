import { UseControllerProps } from "react-hook-form";

// Utils for Toaster
export const SUCCESS_LABEL = "success"
export const ERROR_LABEL = "error"

// Utils for Table
export const ASC_LABEL = "asc";
export const DESC_LABEL = "desc"
export const VISIBILITY_ICON_LABEL = "visibility";
export const EDIT_ICON_LABEL = "edit";
export const RE_INVITE_ICON_LABEL = "re-invite";
export const DELETE_ICON_LABEL = "delete";
export const RESET_PASSWORD_ICON_LABEL = "resetPassword"

// Generic utils
export const ACTIVE_LABEL = "active"
export const INACTIVE_LABEL = "inactive"

export const radioOptions = [
    { label: "ACTIVE", value: ACTIVE_LABEL },
    { label: "INACTIVE", value: INACTIVE_LABEL },
  ]

  export interface Option {
    uuid: string;
    name: string | number;
  }
  export interface SelectInputProps extends UseControllerProps<any> {
    myOnChange?: (...args: any) => void;
    isDisabled?: boolean;
    options: (string | number | Option)[];
  }
