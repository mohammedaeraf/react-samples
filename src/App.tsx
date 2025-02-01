import "./App.css";
import AboutUs from "./Components/AboutUs.tsx";
import Cars from "./Components/Cars.tsx";
import CarsProps from "./Components/CarsProps.tsx";
import CourseListProps from "./Components/CourseListProps.tsx";
import ProductsProps from "./Components/ProductsProps.tsx";
import Vehicles from "./Components/Vehicles.tsx";

function App() {
  // const cars = [
  //   "BMW 7 Series",
  //   "Audi A7",
  //   "Mercedes S Class",
  //   "Renault Duster",
  //   "Maruti Alto",
  //   "Land Rover Defender",
  //   "Hyundai i20",
  // ];

  // const bikes = [
  //   "Honda Activa",
  //   "Splendor",
  //   "Super Splendor",
  //   "Burgman",
  //   "Ninja",
  // ];

  // let courses = [
  //   {
  //     id: 1,
  //     title: "Advanced Web Design",
  //     description: "HTML CSS Bootstrap Responsive Design",
  //     duration: "60 days",
  //   },
  //   {
  //     id: 2,
  //     title: "React Frontend",
  //     description: "JS TS React",
  //     duration: "50 days",
  //   },
  //   {
  //     id: 3,
  //     title: "Adv Excel",
  //     description: "Adv Excel",
  //     duration: "30 days",
  //   },
  //   {
  //     id: 4,
  //     title: "Python",
  //     description: "Python Advanced",
  //     duration: "30 days",
  //   },
  // ];

  let cars = [
    {
      id: 1,
      model: "Model S",
      manufacturer: "Tesla",
      price: 79999,
      type: "Electric",
    },
    {
      id: 2,
      model: "Civic",
      manufacturer: "Honda",
      price: 24999,
      type: "Sedan",
    },
    {
      id: 3,
      model: "Corolla",
      manufacturer: "Toyota",
      price: 23999,
      type: "Sedan",
    },
    {
      id: 4,
      model: "F-150",
      manufacturer: "Ford",
      price: 28999,
      type: "Truck",
    },
    {
      id: 5,
      model: "Mustang",
      manufacturer: "Ford",
      price: 55999,
      type: "Sports",
    },
    {
      id: 6,
      model: "Wrangler",
      manufacturer: "Jeep",
      price: 39999,
      type: "SUV",
    },
    {
      id: 7,
      model: "Model 3",
      manufacturer: "Tesla",
      price: 44999,
      type: "Electric",
    },
    {
      id: 8,
      model: "Triber RXL",
      manufacturer: "Renault",
      price: 20000,
      type: "Petrol",
    },
  ];

  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
  ];

  return (
    <>
      <header>
        <h1>React Demos</h1>
      </header>
      <CarsProps items={cars} />
      <ProductsProps items={products} />
    </>
  );
}

export default App;
