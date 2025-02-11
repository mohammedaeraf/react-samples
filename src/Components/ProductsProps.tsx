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

/*
Explanation

The provided code snippet is from a React functional component written in TypeScript, named ProductsProps. This snippet shows the closing part of the component's JSX structure and the export statement.

The </div> tag indicates the end of a div element that was opened earlier in the component. This div element likely contains various child elements and components that make up the content and structure of the ProductsProps component.

Following the closing div tag, the component is closed with a closing parenthesis ), which matches the opening parenthesis used to start the JSX return statement. This signifies the end of the JSX returned by the ProductsProps component.

Finally, the ProductsProps component is exported as the default export of the module using the export default ProductsProps; statement. This makes the ProductsProps component available for import and use in other parts of the application. By exporting the component as the default export, it can be imported without using curly braces, simplifying its usage in other files.
*/
