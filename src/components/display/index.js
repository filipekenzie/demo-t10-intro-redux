import { useSelector } from "react-redux";

function Display() {
  const result = useSelector((store) => store.result);

  return <div>{result}</div>;
}

export default Display;
