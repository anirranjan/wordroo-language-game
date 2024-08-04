import axios from "axios";
import introImg from "../GroceryStoreTheme/1 Grocery Intro.jpeg";
import { Text, Image, Button, Box, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const GroceryGame = () => {
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

  const getGroceryQuestions = async (level) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/grocerylevel${level}`,
        {
          targetLanguage: "Spanish",
        }
      );
      //console.log(typeof res.data)
      const responseData = JSON.parse(res.data);
      console.log(responseData);
      return responseData;
    } catch (error) {
      console.error("getGroceryQuestions | Error:", error);
    }
  };

  const getAllQuestions = async () => {
    setLoading(true);
    try {
      const level1Questions = await getGroceryQuestions(5);
      const level2Questions = await getGroceryQuestions(6);
      const level3Questions = await getGroceryQuestions(7);
      const level4Questions = await getGroceryQuestions(8);

      const allQuestions = [
        ...level1Questions,
        ...level2Questions,
        ...level3Questions,
        ...level4Questions,
      ];
      navigate("/storeboard", { state: { questions: allQuestions } });
    } catch (error) {
      console.error("getAllQuestions | Error:", error);
    }
  };

  return (
    <Center h="100vh">
      <Box position="relative">
        <Image src={introImg} alt="Grocery Intro" boxSize="1000px" />
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
          <Text fontSize="2xl">
            Greetings! My name is Merlin, the dog. I am visiting {country} on a
            work trip. I am hungry and want to cook myself a meal. Can you help
            me speak Spanish so that I can buy some things at the local grocery
            store?
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

export default GroceryGame;
