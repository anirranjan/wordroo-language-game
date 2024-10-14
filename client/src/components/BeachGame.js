import axios from "axios";
import introImg from "../BeachTheme/1 Beach Intro.jpeg";
import { Text, Image, Button, Box, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const BeachGame = () => {
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

  const getBeachQuestions = async (level) => {
    try {
      const res = await axios.post(`http://localhost:3001/beachlevel${level}`, {
        targetLanguage: "Spanish",
      });
      //console.log(typeof res.data)
      const responseData = JSON.parse(res.data);
      console.log(responseData);
      return responseData;
    } catch (error) {
      console.error("getBeachQuestions | Error:", error);
    }
  };

  const getAllQuestions = async () => {
    setLoading(true);
    try {
      const level1Questions = await getBeachQuestions(13);
      const level2Questions = await getBeachQuestions(14);
      const level3Questions = await getBeachQuestions(15);
      const level4Questions = await getBeachQuestions(16);

      const allQuestions = [
        ...level1Questions,
        ...level2Questions,
        ...level3Questions,
        ...level4Questions,
      ];
      navigate("/beachboard", { state: { questions: allQuestions } });
    } catch (error) {
      console.error("getAllQuestions | Error:", error);
    }
  };

  return (
    <Center h="100vh">
      <Box position="relative">
        <Image src={introImg} alt="Beach Intro" boxSize="1000px" />
        <Box
          position="absolute"
          top="0%"
          left="50%"
          transform="translateX(-50%)"
          bg="rgba(0, 0, 0, 0.6)"
          color="white"
          p={10}
          borderRadius="md"
          zIndex="1"
          textAlign="center"
          width="100%"
        >
          <Text fontSize='2xl'>
            Surfs Up! Disco, the Panda, here. I love the beach so I took a
            spontaneous flight to {country} for a weekend vacation. I
            want to meet some party animals. Help me speak Language so
            I can meet my people?
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
            colorScheme="blue"
            size="lg"
            onClick={getAllQuestions}
            isLoading={loading}
          >
            Start Game
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default BeachGame;
