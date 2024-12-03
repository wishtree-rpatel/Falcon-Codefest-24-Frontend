import PropTypes from "prop-types";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorIcon from "../assets/error-icon.svg";
import SuccessIcon from "../assets/success-icon.svg";
import { ERROR_LABEL, SUCCESS_LABEL } from "../utils/componentUtils";

interface ToasterProps {
  message: string;
  messageType: string;
  myRef: any;
}
function Toaster({ message, messageType, myRef }: ToasterProps) {
  const showToasts = (): void => {
    toast(customMsg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "toastId",
    });
  };
  console.log("Message", message, "Message type", messageType);
  const customMsg = () => (
    <div className="toaster-blk">
      <div
        className={`toaster-error-icon ${
          messageType === SUCCESS_LABEL
            ? "toaster-left-success"
            : "toaster-left-error"
        }`}
      >
        <div className="toaster-icon">
          {messageType === SUCCESS_LABEL && (
            <img src={SuccessIcon} width="20px" height="20px" />
          )}
          {messageType === ERROR_LABEL && (
            <img src={ErrorIcon} width="20px" height="20px" />
          )}
        </div>
      </div>

      <p className="toaster-message">{message}</p>
    </div>
  );
  useEffect(() => {
    myRef.current = showToasts;
  }, [showToasts, myRef]);
  return (
    <div>
      <button style={{ display: "none" }}>Show Toast !</button>
      <ToastContainer closeButton={false} />
    </div>
  );
}

export default Toaster;

Toaster.propTypes = {
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired,
  myRef: PropTypes.object.isRequired,
};
