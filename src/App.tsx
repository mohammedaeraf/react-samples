import "./App.css";
import AboutUs from "./Components/AboutUs.tsx";
import Cars from "./Components/Cars.tsx";
import CourseList from "./Components/CourseList.tsx";
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

  const bikes = [
    "Honda Activa",
    "Splendor",
    "Super Splendor",
    "Burgman",
    "Ninja",
  ];

  return (
    <>
      <header>
        <h1>React Demos</h1>
      </header>
      <Vehicles items={bikes} title="Bikes List"></Vehicles>
    </>
  );
}

export default App;
