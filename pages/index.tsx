import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from '../components/UI/button/button'
import fs, { lstat } from 'fs'
import path from 'path'
import styles from '../styles/Home.module.css'
import { time } from 'console'
import { isTypedArray } from 'util/types'
import { request } from 'https'
import Image from 'next/image'


interface DataType {
  id: number;
  name: string;
  image: string;
}
interface HomePageProps {
  products: any
}

const Home = (props: HomePageProps) => {

  const { products } = props;

  // const testDate = new Date("12-12-2021").toLocaleDateString('en-jp')

  // const [data, setData] = useState<DataType[]>([])
  // useEffect(() => {
  //   fetch('mocks.json').then((res => res.json())).then((dat => setData(dat)))
  // }, [])

  return (
    <div className={styles.container}>
      <ul>
        {products.map((product: any) => <li key={product.id}>
          <Link href={ `/${product.id}`}>{product.name}</Link>
          <Image src={product.image} alt={"Products"} width={30} height={40} />
        </li>)}
      </ul>
      {/* next js will automatically all pages that have no dynamic data */}
      {/* <p>fffffffffffffffffffffffffffffffffffffffffffffffffffff</p> */}
      {/* {data.map(item =>
        <React.Fragment key={item.id}>
          <p>{item.name}</p>
          <img style={{height:"3rem"}} src={item.image} />
        </React.Fragment>
      )} */}
      {/* <h1>Hi</h1>
      <time>{testDate}</time>
      <Button href='/about'>Click ME</Button>
      <ul> */}
      {/* tricks= it automatically 
  pre-fetches the data of other 
  pages we might navigate to as soon as 
  we hover over the link  */}
      {/* <li>
          <Link
            href="/portfolio"
          // replace
          //this prop will stop the new page from going back to old page
          >

            Portfolio
          </Link>
        </li>
      </ul> */}

    </div>
  )
}
// exclusive for next.JS

interface dataType {
  id: number,
  name: string
}
export async function getStaticProps(context:any) {
  console.log("regenerating.....")
  const filePath = path.join(process.cwd(), 'mock', 'mocks.json')
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData as any);

  if (data.length === 0) {
    return { notFound: true }
  }
  if (!data) {
    // instead of 404 is to redirect
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }
  return {
    props: {
      products: data
    },
    revalidate: 10, //in 10 seconds 

  }
}
//Incremental Static Generation
// If the data changes then we will have to npm run build again and redeploy
// which is not a good thing, But if the data changes frequently then we will have to do
// this aga and again, 
// Solution 1:
// Can use useEffect to update the products after prerendering an initial data.

// solution 2:
// Incremental static generation
// It means we dont just generate the page statically once at build time, but
// that is continuously updated without you re-deploying it.
// Process:
// 1. Pre-generate-page
// 2. Re-generate it on every request, at most every x seconds
// 3. That means if a request is made for a certain page and it's, 
// //    let's say less than 60 seconds
// for eg: if a request is made for a page in less than 60s since it was last
// regenerated, the existing page would be served to the visitor. but if it's past 60s
// this page would be pregenerated at the server instead,
// So, 
// 1. You either serve the old page if isTypedArray;s not that old ||OR
// 2. Generate, store and serve "new" page otherwise
// And if that page was pregenerated on the server because its outdated, 
// then this newly generated page will replace the existing old page on the server
// it will be cashed and future visitors will see that re-generated page instead

//To activate this use a key in props object called as revalidate
//In development environment this number doesnt matte
//But in production in does matter and we will have the best of both worlds

export default Home
