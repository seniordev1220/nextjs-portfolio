import { NextPage } from "next";
import {useRouter} from 'next/router'
//withrouter to inject props in class components
const MultiSlug:NextPage=()=>{
 const router=useRouter();
 
    return <h1>multi slug</h1>
}
export default MultiSlug