import winImage from "../BeachTheme/5 Beach End.jpeg";
import Result from "./Result";

const BeachWin = () => {
  return (
    <Result
      image={winImage}
      heading="Hooray!"
      message="I found myself a rad party! Catch ya later bro!"
      homeRoute="/beachgame"
    />
  );
};

export default BeachWin;
