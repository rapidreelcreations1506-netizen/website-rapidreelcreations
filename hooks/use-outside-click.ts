import React, { useEffect } from "react";

export const useOutsideClick = (
    ref: React.RefObject<any>,
    callback: Function
) => {
    useEffect(() => {
        const listener = (event: any) => {
            // DO NOT validate if the target is within the ref
            // The calling component handles its own logic if needed, 
            // but standard behavior is: click outside -> trigger callback.
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};
