import "./Cars.css";
import Car from "../Models/Car";

interface Props {
  items: Car[];
}
function CarsProps(props: Props) {
  if (props.items.length === 0) {
    return <h3>No records found</h3>;
  }

  return (
    <table className="table table-striped table-hover">
      <caption>Details of Cars</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Car Model</th>
          <th>Manufacturer</th>
          <th>Price</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((car) => (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.model}</td>
            <td>{car.manufacturer}</td>
            <td>${car.price}</td>
            <td>{car.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CarsProps;

/*
Explanation

The provided code is a TypeScript import statement used in a React project. It imports a module named Car from a file located in the ../Models/Car path relative to the current file, which is CarsProps.tsx.

In the context of a React and TypeScript project, this import statement suggests that there is a Car class, interface, or type definition in the Car file within the Models directory. This Car module is likely used to define the structure or behavior of car-related data within the application.

By importing the Car module, the CarsProps.tsx file can utilize the Car class, interface, or type to create instances of cars, define props for components, or enforce type safety when working with car-related data. This helps maintain a clear and consistent data model across the application, making the code more readable, maintainable, and less prone to errors.

*/
