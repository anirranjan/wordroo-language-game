import lossImage from "../BakeryTheme/N Bakery Incorrect Answer.jpeg";
import Result from "./Result";

const BakeryLose = () => {
  return (
    <Result
      image={lossImage}
      message="Looks like I was not able to sell any of my baked goods to customers today! I guess I will try again tomorrow."
      homeRoute="/bakerygame"
    />
  );
};

export default BakeryLose;
