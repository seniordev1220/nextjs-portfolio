import { useInView } from "react-intersection-observer";
import classes from "./quote.module.scss"

const quote = `" There are no limits to what you can do or heal, as long as you believe. "`

export const Quotes = () => {
    const { ref, inView } = useInView({
        threshold: 0
      });
      
    return (<>
        <div ref={ref} className={classes.quote__container}>
            {inView && <h3 className={classes.quote__content}>
                {quote.split(" ").map((word) => (
                    <>
                        <span className={classes.quote__each}>{word}</span>
                    </>
                ))
                }
            </h3>
            }
        </div>

    </>
    )
}