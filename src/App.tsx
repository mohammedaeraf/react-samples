import "./App.css";
import AboutUs from "./Components/AboutUs.tsx";
import Article from "./Components/Article.tsx";
import ArticleList from "./Components/ArticleList.tsx";
import Cars from "./Components/Cars.tsx";
import CarsProps from "./Components/CarsProps.tsx";
import Counter from "./Components/Counter.tsx";
import CourseListProps from "./Components/CourseListProps.tsx";
import Greeting from "./Components/Greeting.tsx";
import GreetingProps from "./Components/GreetingProps.tsx";
import NameInput from "./Components/NameInput.tsx";
import ProductsProps from "./Components/ProductsProps.tsx";
import Toggle from "./Components/Toggle.tsx";
import ToggleSwitch from "./Components/ToggleSwitch.tsx";
import UserList from "./Components/UserList.tsx";
import UserProfileProps from "./Components/UserProfileProps.tsx";
import UserProfileState from "./Components/UserProfileState.tsx";
import Vehicles from "./Components/Vehicles.tsx";
import fetchCars from "./Services/CarService.tsx";

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

  // const products = [
  //   {
  //     id: 1,
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     price: 109.95,
  //     description:
  //       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     rating: {
  //       rate: 3.9,
  //       count: 120,
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: "Mens Casual Premium Slim Fit T-Shirts ",
  //     price: 22.3,
  //     description:
  //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     category: "men's clothing",
  //     image:
  //       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     rating: {
  //       rate: 4.1,
  //       count: 259,
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: "Mens Cotton Jacket",
  //     price: 55.99,
  //     description:
  //       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     rating: {
  //       rate: 4.7,
  //       count: 500,
  //     },
  //   },
  // ];

  // return (
  //   <div className="container mt-4">
  //     <h1 className="text-center mb-4">Articles</h1>
  //     <Article title="Understanding React Props">
  //       Props allow components to receive data from their parent."
  //     </Article>
  //     <Article title="What is Bootstrap?">
  //       Bootstrap is a popular CSS framework that helps in designing responsive
  //       websites quickly.
  //     </Article>
  //     <Article title="What is a useState()">
  //       useState() is a React Hook that is used to maintain state of Components
  //       in React.
  //     </Article>
  //   </div>
  // );

  return (
    <>
      <header>
        <h1>React Demos</h1>
      </header>
      <UserList />
    </>
  );
}

export default App;
