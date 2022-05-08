import { NextPage } from "next";
import {useRouter} from 'next/router'
//withrouter to inject props in class components
const PortfolioItem:NextPage=()=>{
 const router=useRouter();
 console.log(router.pathname, router.query)
    return <h1>Portfolio Item</h1>
}
export default PortfolioItem