import React, { useEffect, useState } from 'react'
import useSWR from 'swr'


function LastSales(props: any) {
    const [data, setData] = useState<any>([])
    // const [isLoading, setIsLoading]=useState<boolean>()


    //alternative for data fetching 
    //request o url will be sent when this component is loaded
    const { datas, error }: any = useSWR("https://next-js-project-ed582-default-rtdb.firebaseio.com/sales.json")
    useEffect(() => {
        setData(datas)
    }, [datas])
    // useEffect(()=>{
    //     setIsLoading(true)
    //     fetch("https://next-js-project-ed582-default-rtdb.firebaseio.com/sales.json").
    //     then(res=>res.json()).then(dat=>{
    //         setData(dat)
    //         setIsLoading(false)
    //     })
    // },[])
    //   return (
    //     <div>
    //         {isLoading?<p>Loading....</p>:
    //        <> <p>finished loading</p>
    //      {
    //          data.map((item:any)=>{
    //              console.log(item)
    //          })
    //      }
    //        </>
    //         }

    //     </div>
    //   )
    if (error) {
        return <p>Failed to load</p>
    }
    if (data) {
        return <p>loading...</p>
    }
    return <>
        <p>Loaded</p>
        {console.log(datas)}
    </>

}


export default LastSales

