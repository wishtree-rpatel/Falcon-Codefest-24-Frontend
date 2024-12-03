import { useEffect, useRef, useState } from "react";
import { ERROR_LABEL, SUCCESS_LABEL } from "./componentUtils";
export type useCallbackStateProp = {
    message: string,
    messageType: typeof SUCCESS_LABEL | typeof ERROR_LABEL
}

const useCallbackState = (initialValue:useCallbackStateProp) => {
    const [state, _setState] = useState<any>(initialValue);
    const callbackQueue = useRef<((state: any) => void)[]>([]);

    useEffect(() => {
        callbackQueue.current.forEach((cb) => cb(state));
        callbackQueue.current = [];
    }, [state]);
    const setState = (newValue:useCallbackStateProp, callback?:(state: useCallbackStateProp) => void) => {
        _setState(newValue);
        if (callback && typeof callback === "function") {
            callbackQueue.current.push(callback);
        }
    };
    return [state, setState];
};
export default useCallbackState;
