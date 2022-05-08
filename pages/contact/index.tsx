import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Search, { SearchPropType } from "./search";

const Portfolio: NextPage = () => {
    const router = useRouter()
    const handleClick = () => {
        //   router.push("/portfolio/pppp")
        //   router.replace
        router.push(
            {
                pathname: "/portfolio/[id]/[name]",
                query: { id: "1", name: "sasi" }
            })

    }
    const onSearchFN=(selectedmonth:string, selectedyear:string)=>{
       router.push(
        {
            pathname: "/portfolio/[id]/[name]",
            query: { id: "11111", name: "sasi9999" }
        })
    }
    return <>
        <h1>Portfolio</h1>
        <Link
            // href="/portfolio"
            // alternative href syntax
            href={{
                pathname: "/portfolio/[id]",
                query: { id: "1" }
            }}
        // replace
        //this prop will stop the new page from going back to old page
        >

            Portfolio - 1
        </Link>

        <button onClick={handleClick}>Click me </button>
        <label>year</label>
        <Search onSearch={()=>onSearchFN}/>
    </>
}
export default Portfolio