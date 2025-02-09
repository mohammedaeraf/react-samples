## Steps  

1. Use Postman to fetch All Products from https://dummyjson.com/products and fetch single product from https://dummyjson.com/products/1 

2. Create interface Product based on fields in the API response. 

3. Create component `ProductList` that fetches data from https://dummyjson.com/products. Display fields as mentioned in the assignment.

4. Define Route and Link for the ProductList component in App.tsx

5. Run and check if the ProductList component is displaying properly

6. Create component `ProductDetails` that fetches data from https://dummyjson.com/products/1. Use useParams() to get id from the route. Display fields as mentioned in the assignment.

7. Add a Route called `/products/:id` in App.tsx that links to ProductDetails component.

8. Add a Link in ProductList component that navigates to ProductDetails component with the `id` param.

9. Ensure the ProductList and ProductDetails component are loading properly