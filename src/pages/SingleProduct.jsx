
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


export default function SingleProduct() {

    const [product, setProduct] = useState({})


    const { id } = useParams()
    useEffect(() => {
        const url_id = `https://fakestoreapi.com/products/${id}`
        fetch(url_id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })

    }, [id])

    const navigate = useNavigate()

    function next() {
        const nextPost = Number(id) + 1
        navigate(`/product/${nextPost}`)
    }

    function pre() {
        const previousPost = Number(id) - 1
        navigate(`/product/${previousPost}`)
    }
    return (

        <div className="container my-5 b">
            <button onClick={pre}>
                Precedente
            </button >
            <button onClick={next}>
                Successivo
            </button >
            <div className="card shadow-sm border-0 mx-auto" style={{ maxWidth: "600px" }}>
                <div className="text-center p-4" style={{ height: "300px" }}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid h-100"
                        style={{ objectFit: "contain" }}
                    />
                </div>

                <p className="mb-2 text-center text-uppercase text-muted">{product.category}</p>

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title" title={product.title}>{product.title}</h5>
                    <p className="card-text text-muted small mb-3">{product.description}</p>

                    <p className="mb-2 fw-bold">⭐ {product.rating?.rate}</p>
                    <p className="mt-auto fw-bold text-danger">€{Number(product.price).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}