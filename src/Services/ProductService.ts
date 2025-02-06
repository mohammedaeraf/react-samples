const fetchProducts = async () => {
  // Make a GET request to the API endpoint
  const response = await fetch("https://fakestoreapi.com/products");

  // Parse the JSON response
  const data = await response.json();

  // Update the 'users' state with the fetched data
  return data;
};
export default fetchProducts;
