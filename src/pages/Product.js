import { Link } from "react-router-dom"
export default function Product(){
    return(
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/product">Product</Link>
            </nav>
            <h1>Product Page</h1>
        </div>
    )
}