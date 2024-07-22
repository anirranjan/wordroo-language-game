import winImage from "../GroceryStoreTheme/5 Grocery End.jpeg";
import Result from "./Result";

const GroceryWin = () => {
  return (
    <Result
      image={winImage}
      message="I can go home and make myself a nice meal now. Thank you for helping me find everything that I was looking for!"
      homeRoute="/grocerygame"
    />
  );
};

export default GroceryWin;
