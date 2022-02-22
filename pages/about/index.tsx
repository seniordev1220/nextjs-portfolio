
function About(props: { userName: string }){
    return <h1>{props.userName}</h1>
}
//we can't use getStaticProps with getServerSideProps and we don't need getStaticPaths
export async function getServerSideProps(context:any){
    console.log("reg....") 
    const {params, req, res}=context;
    console.log(res, params)
    return {
        props:{
            userName:"maxi"
        }
    };
}
export default About