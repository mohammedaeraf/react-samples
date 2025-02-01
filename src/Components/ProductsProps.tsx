import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Props {
  items: Product[];
}

const ProductsProps = (props: Props) => {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Products List</h1>
      <ul className="list-unstyled">
        {props.items.map((product) => (
          <li
            key={product.id}
            className="card mb-3 shadow-sm"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            <div className="row g-0">
              {/* Product Image */}
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid rounded-start"
                />
              </div>

              {/* Product Details */}
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

export default ProductsProps;
