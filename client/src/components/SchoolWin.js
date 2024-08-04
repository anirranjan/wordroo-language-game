import winImage from "../SchoolTheme/5 School End.jpeg";
import Result from "./Result";

const SchoolWin = () => {
  return (
    <Result
      image={winImage}
      heading="Hooray!"
      message="Thank you for helping me find my new friends on the playground!"
      homeRoute="/"
    />
  );
};

export default SchoolWin;
