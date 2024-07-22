import lossImage from "../GroceryStoreTheme/N Grocery Incorrect Answer.jpeg";
import Result from "./Result";

const GroceryLose = () => {
  return (
    <Result
      image={lossImage}
      message="Looks like I was not able to find anything that I was looking for! I guess I will try again tomorrow."
      homeRoute="/grocerygame"
    />
  );
};

export default GroceryLose;
