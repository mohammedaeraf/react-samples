import "./Cars.css";

function Cars() {
  return (
    <table className="table table-striped">
      <caption>Details of Cars</caption>
      <thead className="table-primary">
        <tr>
          <th>#</th>
          <th>Car Model</th>
          <th>Manufacturer</th>
          <th>Price</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Model S</td>
          <td>Tesla</td>
          <td>$79,990</td>
          <td>Electric</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mustang</td>
          <td>Ford</td>
          <td>$56,275</td>
          <td>Sports</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Civic</td>
          <td>Honda</td>
          <td>$25,000</td>
          <td>Sedan</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Corolla</td>
          <td>Toyota</td>
          <td>$23,600</td>
          <td>Sedan</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Wrangler</td>
          <td>Jeep</td>
          <td>$38,690</td>
          <td>Off-road</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Model 3</td>
          <td>Tesla</td>
          <td>$39,990</td>
          <td>Electric</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Camaro</td>
          <td>Chevrolet</td>
          <td>$26,495</td>
          <td>Sports</td>
        </tr>
        <tr>
          <td>8</td>
          <td>F-150</td>
          <td>Ford</td>
          <td>$31,520</td>
          <td>Truck</td>
        </tr>
        <tr>
          <td>9</td>
          <td>X5</td>
          <td>BMW</td>
          <td>$65,700</td>
          <td>SUV</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Accord</td>
          <td>Honda</td>
          <td>$27,295</td>
          <td>Sedan</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Cars;
