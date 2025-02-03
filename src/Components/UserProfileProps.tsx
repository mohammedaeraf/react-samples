interface Props {
  name: string;
  age: number;
}
const UserProfileProps = (props: Props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default UserProfileProps;
