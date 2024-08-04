import axios from "axios";
import introImg from "../BakeryTheme/1 Bakery Intro.jpeg";
import { Text, Image, Button, Box, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const BakeryGame = () => {
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

  const getBakeryQuestions = async (level) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/bakerylevel${level}`,
        {
          targetLanguage: "Spanish",
        }
      );
      //console.log(typeof res.data)
      const responseData = JSON.parse(res.data);
      console.log(responseData);
      return responseData;
    } catch (error) {
      console.error("getBakeryQuestions | Error:", error);
    }
  };

  const getAllQuestions = async () => {
    setLoading(true);
    try {
      const level1Questions = await getBakeryQuestions(9);
      const level2Questions = await getBakeryQuestions(10);
      const level3Questions = await getBakeryQuestions(11);
      const level4Questions = await getBakeryQuestions(12);

      const allQuestions = [
        ...level1Questions,
        ...level2Questions,
        ...level3Questions,
        ...level4Questions,
      ];
      navigate("/bakeryboard", { state: { questions: allQuestions } });
    } catch (error) {
      console.error("getAllQuestions | Error:", error);
    }
  };

  return (
    <Center h="100vh">
      <Box position="relative">
        <Image src={introImg} alt="Bakery Intro" boxSize="1000px" />
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
            Good day! My name is BunBun, the Bunny. I recently moved to{" "}
            {country} to open up a bakery. I bake a variety of cakes, cookies,
            bread, and pies every day in my bakery! Can you help me speak
            Spanish so that I can sell my baked goods to the local customers?
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

export default BakeryGame;
