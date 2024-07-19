import axios from "axios";
import introImg from "../SchoolTheme/1 School Intro.jpeg";
import { Heading, Text, Image, Button, Box } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const SchoolGame = () => {
  const navigate = useNavigate();

  const getSchoolQuestions = async (level) => {
    try {
      const res = await axios.post(`http://localhost:3001/schoollevel${level}`, {
        targetLanguage: "Spanish",
      });
      //console.log(typeof res.data)
      const responseData = JSON.parse(res.data);
      console.log(responseData)
      return responseData
    } catch (error) {
      console.error("getSchoolQuestions | Error:", error);
    }
  };

  const getAllQuestions = async () => {
    try {
      const level1Questions = await getSchoolQuestions(1);
      const level2Questions = await getSchoolQuestions(2);
      const level3Questions = await getSchoolQuestions(3);
      const level4Questions = await getSchoolQuestions(4);

      const allQuestions = [...level1Questions, ...level2Questions, ...level3Questions, ...level4Questions];
      navigate("/gameboard", { state: { questions: allQuestions } });
    } catch (error) {
      console.error("getAllQuestions | Error:", error);
    }
  }


  return (
    <Box p={8}>
      <Heading size="2xl">School</Heading>
      <Image boxSize='200px' src={introImg} alt='School Intro'/>
      <Text>
        Hi, I'm Bill. Today's my first day at my new school and I don't know
        Spanish very well. Can you help me find my new friends?
      </Text>
      <Button colorScheme='blue' size='md' onClick={getAllQuestions}>Start Game</Button>
    </Box>
  );
};

export default SchoolGame;
