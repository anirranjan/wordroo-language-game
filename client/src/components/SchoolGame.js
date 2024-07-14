import axios from "axios";
import introImg from "../SchoolTheme/1 School Intro.jpeg";
import { Heading, Text, Image, Button, Box } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SchoolGame = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([])

  const getLevel1Questions = async () => {
    try {
      const res = await axios.post("http://localhost:3001/schoollevel1", {
        targetLanguage: "Spanish",
      });
      //console.log(typeof res.data)
      const responseData = JSON.parse(res.data);
      console.log(responseData)
      setQuestions(responseData)
      navigate('/gameboard', { state: { questions: responseData } })
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box p={8}>
      <Heading size="2xl">School</Heading>
      <Image boxSize='200px' src={introImg} alt='School Intro'/>
      <Text>
        Hi, I'm Bill. Today's my first day at my new school and I don't know
        Spanish very well. Can you help me find my new friends?
      </Text>
      <Button colorScheme='blue' size='md' onClick={getLevel1Questions}>Start Game</Button>
    </Box>
  );
};

export default SchoolGame;
