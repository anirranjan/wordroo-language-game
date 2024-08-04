import lossImage from "../GroceryStoreTheme/N Grocery Incorrect Answer.jpeg";
import Result from "./Result";

const GroceryLose = () => {
  return (
    <Result
      image={lossImage}
      heading="Oh no!"
      message="Looks like I was not able to find anything that I was looking for! I guess I will try again tomorrow."
      homeRoute="/"
    />
  );
};

export default GroceryLose;
