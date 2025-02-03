interface Props {
  name: string;
}
const GreetingProps = (props: Props) => {
  return <h2>Hello, {props.name}!</h2>;
};

export default GreetingProps;
