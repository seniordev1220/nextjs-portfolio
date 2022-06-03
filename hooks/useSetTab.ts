import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TabContext } from "../pages";

//Logic to switch tabs use custom hook

export const useSetTab = (tabNumber:number) => {
    const { ref, inView } = useInView({
        threshold: 1
    });
    const { tabValue, handleTabChange } = useContext(TabContext)
    useEffect(() => {
        if (inView === true) {
            handleTabChange(null as any, tabNumber)

        }
    }, [inView])
    return { ref, inView, tabValue , handleTabChange}
}
