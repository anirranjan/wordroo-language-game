import winImage from "../BakeryTheme/5 Bakery End.jpeg";
import Result from "./Result";

const BakeryWin = () => {
  return (
    <Result
      image={winImage}
      heading="Hooray!"
      message="The entire shop is sold out! Thank you for helping me!"
      homeRoute="/bakerygame"
    />
  );
};

export default BakeryWin;
