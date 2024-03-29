import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom"
import apiRequest from "../apiRequest";
import Page from "../Page"
export default function Product(){
    const params = useParams();
    const {productId} = params
    const {data, isLoading} = useQuery(['product', productId], () => apiRequest('GET', `api/products/${productId}`))
 if(isLoading){
    return <div>Loading...</div>
 }
    return(
    <Page>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                <img
                    className="card-img-top mb-5 mb-md-0"
                    src={data.image}
                    alt="..."
                />
                </div>
                <div className="col-md-6">
                <div className="small mb-1">SKU: BST-498</div>
                <h1 className="display-5 fw-bolder">{data.title}</h1>
                <div className="fs-5 mb-5">
                    {/* <span className="text-decoration-line-through"></span> */}
                    <span>${data.price}</span>
                </div>
                <p className="lead">
                    {data.description}
                </p>
                <div className="d-flex">
                    <input
                    className="form-control text-center me-3"
                    id="inputQuantity"
                    type="num"
                    defaultValue={1}
                    style={{ maxWidth: "3rem" }}
                    />
                    <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                    >
                    <i className="bi-cart-fill me-1" />
                    Add to cart
                    </button>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="py-5 bg-light">
            <div className="container px-4 px-lg-5 mt-5">
            <h2 className="fw-bolder mb-4">Related products</h2>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div className="col mb-5">
                <div className="card h-100">
                    {/* Product image*/}
                    <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                    />
                    {/* Product details*/}
                    <div className="card-body p-4">
                    <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">Fancy Product</h5>
                        {/* Product price*/}
                        $40.00 - $80.00
                    </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                        View options
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col mb-5">
                <div className="card h-100">
                    {/* Sale badge*/}
                    <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                    Sale
                    </div>
                    {/* Product image*/}
                    <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                    />
                    {/* Product details*/}
                    <div className="card-body p-4">
                    <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">Special Item</h5>
                        {/* Product reviews*/}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        </div>
                        {/* Product price*/}
                        <span className="text-muted text-decoration-line-through">
                        $20.00
                        </span>
                        $18.00
                    </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col mb-5">
                <div className="card h-100">
                    {/* Sale badge*/}
                    <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                    Sale
                    </div>
                    {/* Product image*/}
                    <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                    />
                    {/* Product details*/}
                    <div className="card-body p-4">
                    <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">Sale Item</h5>
                        {/* Product price*/}
                        <span className="text-muted text-decoration-line-through">
                        $50.00
                        </span>
                        $25.00
                    </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col mb-5">
                <div className="card h-100">
                    {/* Product image*/}
                    <img
                    className="card-img-top"
                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    alt="..."
                    />
                    {/* Product details*/}
                    <div className="card-body p-4">
                    <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">Popular Item</h5>
                        {/* Product reviews*/}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        </div>
                        {/* Product price*/}
                        $40.00
                    </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </Page>
    )
}