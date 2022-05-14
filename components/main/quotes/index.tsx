import { useScrollFetcher } from "../../../hooks/useScrollFetcher"
import classes from "./quote.module.scss"

const quote = "There are no limits to what you can do or heal, as long as you believe."

export const Quotes = () => {
    const showQuote = useScrollFetcher(350);
    return (<>
        <div className={classes.quote__container}>
            {showQuote && <h3 className={classes.quote__content}>
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