
function UserDetails(props:any){
    return <h1>{props.id}</h1>
}
//we can't use getStaticProps with getServerSideProps and we don't need getStaticPaths
export async function getServerSideProps(context:any){
    
    const {params}=context;
   

    const userId=params.uid;
    return {

        props:{
            id:"userid-"+userId
        }
    };
}
export default UserDetails