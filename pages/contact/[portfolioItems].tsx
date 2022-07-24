import { NextPage } from "next";
import {useRouter} from 'next/router'
//withrouter to inject props in class components
const PortfolioItem:NextPage=()=>{
 const router=useRouter();
 
    return <h1>Portfolio Item</h1>
}
export default PortfolioItem