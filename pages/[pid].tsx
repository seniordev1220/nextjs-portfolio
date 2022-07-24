import path from 'path';
import React from 'react'
import fs from 'fs'
import { useRouter } from 'next/router';
import { ReadableStreamDefaultReader } from 'node:stream/web';

interface ProductDetailsType {
    name: string;
    id: number;
    image: string
}
interface LoadedProductType {
    loadedProduct: ProductDetailsType
}

function ProductDetails({ loadedProduct }: LoadedProductType) {

    const router = useRouter()
    //Needed if fallback is set to true
    //Not needed if fallback is set to "blocking" // as incomplete page will not be loaded
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h3>{loadedProduct.name}</h3>
            <p>{loadedProduct.image}</p>

        </div>
    )
}
function getData() {
    const filePath = path.join(process.cwd(), 'mock', 'mocks.json')
    const jsonData = fs.readFileSync(filePath); 1
    const data = JSON.parse(jsonData as any);
    return data;
}

export async function getStaticProps(context: any) {
    const { params } = context;
    //param i s an object withg key pid
    const productId = params.pid

    const data = getData()


    const product = data.find((item: any) => item.id === Number(productId))
    // console.log(product)
    if (!product) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            loadedProduct: product
        }
    }
}
//For dynamic pages like this pre generate is not the default option
//so:-
export async function getStaticPaths() {

    const data = getData()
    const ids = data.map((item: { id: any; }) => item.id)
    const pregenpaths = ids.map((item: any) => {
        return { params: { pid: item } }
    })
   
    return {
        paths: [
            { params: { pid: '1' } },
            { params: { pid: '2' } },
            { params: { pid: '3' } },
            { params: { pid: '4' } },
            // {params:{pid:'5'}},
        ],
        // fallback: true,
        //commented params work with fallback true but not pregenerated
        fallback: true
        //blocking makes the page blocking rather than loading an incomplete page
        //fallback key is used if lot of pages are to be pre-generated
    }
}
//next js will call these props 3 times for these different ids
export default ProductDetails

