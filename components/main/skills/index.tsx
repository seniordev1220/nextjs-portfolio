import React from 'react'
import { Box } from '@mui/material';
import { joinClass } from '../../../helpers/utils';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { sectionMapping } from '../sectionMapping';
import { useSetTab } from '../../../hooks/useSetTab';
import classes from "./skills.module.scss"

export const Skills = () => {
    const { ref, inView } = useSetTab(sectionMapping.skill);
    const { isDarkMode } = useDarkMode()
    return (
        <div ref={ref} className={joinClass(classes.skills__container)}>
            <Box className={joinClass(classes.shortDescription, inView ? classes['header--show'] : classes['header--hide'])} sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
                color: isDarkMode ? "#696969" : "#353839aa",
                fontWeight: "800"
            }}>
                <p>Things that I am good at</p>
            </Box>
            <Box sx={{ display: "flex", width: "100%", flexDirection: "column", justiftContent: "center" }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }} className={joinClass(classes['HeadingText'],
                    inView ? classes['header--show'] : classes['header--hide']
                )}  >
                    <p className={classes.skills__header}>My Skills</p>
                    <p className={classes.skills__header}>My Skills</p>
                </Box>

            </Box>


        </div>
    )
}
