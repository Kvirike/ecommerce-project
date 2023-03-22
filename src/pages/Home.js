import { Link } from "react-router-dom"
export default function Home(){
    return(
        <div>
            <nav>
               <Link to="/home">Home</Link>
               <Link to="/product">Product</Link>
            </nav>
            <h1>Home Page</h1>
        </div>
    )
}