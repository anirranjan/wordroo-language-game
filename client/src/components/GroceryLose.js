import lossImage from "../GroceryStoreTheme/N Grocery Incorrect Answer.jpeg";
import { Text, Image, Button, Box, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const GroceryLose = () => {
  const navigate = useNavigate();

  const displayHome = () => {
    navigate("/grocerygame");
  };

  return (
    <Center h="100vh">
      <Box position="relative">
        <Image src={lossImage} alt="Grocery" boxSize="1000px" />
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
          <Text>
            Looks like I was not able to find anything that I was looking for! I
            guess I will try again tomorrow.
          </Text>
        </Box>
        <Box
          position="absolute"
          bottom="10%"
          left="50%"
          transform="translateX(-50%)"
          zIndex="1"
        >
          <Button colorScheme="blue" size="lg" onClick={displayHome}>
            Home
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default GroceryLose;
