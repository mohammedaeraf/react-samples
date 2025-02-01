import "./Cars.css";

interface Car {
  id: number;
  model: string;
  manufacturer: string;
  price: number;
  type: string;
}
interface Props {
  items: Car[];
}
function CarsProps(props: Props) {
  // cars = [];

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
