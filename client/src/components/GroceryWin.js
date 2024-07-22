import winImage from "../GroceryStoreTheme/5 Grocery End.jpeg";
import { Text, Image, Button, Box, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const GroceryWin = () => {
  const navigate = useNavigate();

  const displayHome = () => {
    navigate("/grocerygame");
  };

  return (
    <Center h="100vh">
      <Box position="relative">
        <Image src={winImage} alt="Grocery Win" boxSize="1000px" />
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
            I can go home and make myself a nice meal now. Thank you for helping
            me find everything that I was looking for!
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

export default GroceryWin;
