import axios from "axios";
import introImg from "../SchoolTheme/1 School Intro.jpeg";
import { Text, Image, Button, Box, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SchoolGame = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:3001/getLocation", {
        targetLanguage: "Spanish",
      })
      .then((response) => {
        const resData = JSON.parse(response.data);
        setCountry(resData);
      });
  }, []);

  const getSchoolQuestions = async (level) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/schoollevel${level}`,
        {
          targetLanguage: "Spanish",
        }
      );
      const responseData = JSON.parse(res.data);
      console.log(responseData);
      return responseData;
    } catch (error) {
      console.error("getSchoolQuestions | Error:", error);
    }
  };

  const getAllQuestions = async () => {
    setLoading(true);
    try {
      const level1Questions = await getSchoolQuestions(1);
      const level2Questions = await getSchoolQuestions(2);
      const level3Questions = await getSchoolQuestions(3);
      const level4Questions = await getSchoolQuestions(4);

      const allQuestions = [
        ...level1Questions,
        ...level2Questions,
        ...level3Questions,
        ...level4Questions,
      ];
      navigate("/schoolboard", { state: { questions: allQuestions } });
    } catch (error) {
      console.error("getAllQuestions | Error:", error);
    }
  };

  return (
    <Center h="100vh" bgGradient="linear(to-r, yellow.100, blue.100)">
      <Box position="relative">
        <Image
          src={introImg}
          alt="School Intro"
          boxSize="1000px"
          borderRadius="lg"
          boxShadow="lg"
        />
        <Box
          position="absolute"
          top="0%"
          left="50%"
          transform="translateX(-50%)"
          bg="rgba(0, 0, 0, 0.6)"
          color="white"
          p={10}
          borderRadius="lg"
          zIndex="1"
          textAlign="center"
          width="100%"
          boxShadow="lg"
        >
          <Text fontSize="2xl" textShadow="1px 1px #000">
            Hey guys! My name is Rusty, the fox. My family and I recently moved
            to {country} and today is my first day at school! Can you help me
            speak Spanish so that I can make friends at my new school?
          </Text>
        </Box>
        <Box
          position="absolute"
          bottom="10%"
          left="50%"
          transform="translateX(-50%)"
          zIndex="1"
        >
          <Button
            colorScheme="yellow"
            onClick={getAllQuestions}
            isLoading={loading}
            bg="yellow.400"
            color="black"
            _hover={{ bg: "yellow.300" }}
            borderRadius="full"
            boxShadow="xl"
            fontSize="30px"
            sx={{ width: "300px", height: "150px" }}
          >
            Start Game
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default SchoolGame;
