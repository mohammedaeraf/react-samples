interface Props {
  children: string;
}
function Greeting(props: Props) {
  return <h1>Hello, {props.children}</h1>;
}
export default Greeting;
