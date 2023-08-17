import gif from "../Images/Page404.gif"
const Page404 = ()=>{
    return(
        <div style={{textAlign:'center'}}>
            <h2>404</h2>
            <p>Page not found</p>
            <img src={gif} alt="gif"></img>
        </div>
    )
}

export default Page404;