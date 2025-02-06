import { useState, useEffect } from "react";
import Product from "../Models/Product";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);

    if (response.ok == false) {
      setError("Error while fetching the list of Products");
    } else {
      const data = await response.json();
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error != null) {
    return <h3> {error} </h3>;
  }

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Products List</h1>
      <ul className="list-unstyled">
        {products.map((product) => (
          <li
            key={product.id}
            className="card mb-3 shadow-sm"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid rounded-start"
                />
              </div>

              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">{product.category}</small>
                  </p>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> {product.rating.rate} / 5 (
                    {product.rating.count} reviews)
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
