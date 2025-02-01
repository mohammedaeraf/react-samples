import "./App.css";
import AboutUs from "./Components/AboutUs.tsx";
import Cars from "./Components/Cars.tsx";
import CourseListProps from "./Components/CourseListProps.tsx";
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

  let courses = [
    {
      id: 1,
      title: "Advanced Web Design",
      description: "HTML CSS Bootstrap Responsive Design",
      duration: "60 days",
    },
    {
      id: 2,
      title: "React Frontend",
      description: "JS TS React",
      duration: "50 days",
    },
    {
      id: 3,
      title: "Adv Excel",
      description: "Adv Excel",
      duration: "30 days",
    },
    {
      id: 4,
      title: "Python",
      description: "Python Advanced",
      duration: "30 days",
    },
  ];

  return (
    <>
      <header>
        <h1>React Demos</h1>
      </header>
      {/* <Vehicles items={bikes} title="Bikes List"></Vehicles> */}
      <CourseListProps courseList={courses} />
    </>
  );
}

export default App;
