import { useState, useEffect } from "react";

export const useIsMobile = () => {
    const [width, setWidth] = useState<number>(768);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        setWidth(window?.innerWidth)
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobileWidth = width <= 768;
    return {isMobileWidth}
}