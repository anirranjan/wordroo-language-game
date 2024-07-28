import lossImage from "../BeachTheme/N Beach Incorrect Answer.jpeg";
import Result from "./Result";

const BeachLose = () => {
  return (
    <Result
      image={lossImage}
      message="No parties here dudes! I guess I will try again on my next weekend vacation."
      homeRoute="/beachgame"
    />
  );
};

export default BeachLose;
