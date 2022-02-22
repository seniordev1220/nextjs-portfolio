import React, { useEffect, useState } from 'react'

function LastSales(props: any) {
    //initial sales will be the one from pregenerated one

    const [data, setData] = useState<any>(props.sales)
    const [isLoading, setIsLoading] = useState<boolean>()
    useEffect(() => {
        setIsLoading(true)
        fetch("https://next-js-project-ed582-default-rtdb.firebaseio.com/sales.json").
            then(res => res.json()).then(dat => {
                setData(dat)
                setIsLoading(false)
            })
    }, [])
    if(!data&&!props.sales){
        return <p>loading....</p>
    }
    return (
        <div>
            <p>finished loading</p>
                    {
                        data.map((item: any) => {
                            console.log(item)
                        })
                    }
        
            

        </div>
    )
}

export async function getStaticProps() {
    return fetch("https://next-js-project-ed582-default-rtdb.firebaseio.com/sales.json").
        then(res => res.json()).then(dat => {
            return {
                props: {
                    sales: dat
                },
                revalidate: 10
            }
        })
}

export default LastSales

