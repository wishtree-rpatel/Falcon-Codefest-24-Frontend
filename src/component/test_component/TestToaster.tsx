import { useRef } from "react";
import useCallbackState from "../../utils/useCallBackState";
import Toaster from "../Toaster";
import { ERROR_LABEL, SUCCESS_LABEL } from "../../utils/componentUtils";

const TestToaster = () => {
  const [toasterDetails, setToasterDetails] = useCallbackState({
    message: "",
    messageType: SUCCESS_LABEL,
  });
  const toasterRef = useRef<() => void>();
  const onclickHandle = () => {
    setToasterDetails(
      {
        ...toasterDetails,
        message: "This is dummy toaster",
        messageType: ERROR_LABEL,
      },
      () => toasterRef.current?.()
    );
  };
  return (
    <div>
      <Toaster
        message={toasterDetails.message}
        messageType={toasterDetails.messageType}
        myRef={toasterRef}
      />
      <button onClick={onclickHandle}>Show Toaster</button>
    </div>
  );
};

export default TestToaster;
