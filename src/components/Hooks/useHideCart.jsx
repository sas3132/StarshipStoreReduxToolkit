import {useContext, useEffect, useRef} from "react";
import {ThemeContext} from "../../App";

export function useClickOutsideHideCart(ref) {
    const {hideShowCart} = useContext(ThemeContext)
    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                hideShowCart();

            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up

            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
