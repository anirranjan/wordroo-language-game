import lossImage from "../SchoolTheme/N School Incorrect Answer.jpeg";
import Result from "./Result";

const SchoolLose = () => {
  return (
    <Result
      image={lossImage}
      message="Looks like I was not able to make any friends today at school! I guess I will try again tomorrow."
      homeRoute="/"
    />
  );
};

export default SchoolLose;
