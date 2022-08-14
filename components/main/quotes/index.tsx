import {useRef} from "react"
import { Box, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import MiniLogo from "../../miniLogo";
import classes from "./quote.module.scss"

const quote = `" There are no limits to what you can do or heal, as long as you believe. "`

export const Quotes = () => {
    const { ref, inView } = useInView({
        threshold: 0
    });
   
    return (
        <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Grid container justifyContent={"center"} alignItems="center" sx={{ maxWidth: "1400px" }}>
                <Grid item xs={12} md={7} >
                    <div ref={ref} className={classes.quote__container}>
                        {inView && <h3 className={classes.quote__content}>
                            {quote.split(" ").map((word, index) => (
                                    <span key={`${word}-${index}`} className={classes.quote__each}>{word}</span>
                            ))
                            }
                        </h3>
                        }
                    </div>
                </Grid>
                <Grid className={classes.miniLogoContainer} item xs={5} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    {inView && <MiniLogo />}
                </Grid>
            </Grid>
        </Box>
    )
}