import lossImage from "../BakeryTheme/N Bakery Incorrect Answer.jpeg";
import Result from "./Result";

const BakeryLose = () => {
  return (
    <Result
      image={lossImage}
      heading="Oh no!"
      message="Looks like I was not able to sell any of my baked goods to customers today! I guess I will try again tomorrow."
      homeRoute="/"
    />
  );
};

export default BakeryLose;
