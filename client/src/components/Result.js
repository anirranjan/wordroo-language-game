import { Text, Image, Button, Box, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Result = ({ image, message, homeRoute }) => {
  const navigate = useNavigate();

  const displayHome = () => {
    navigate(homeRoute);
  };

  return (
    <Center h="100vh">
      <Box position="relative">
        <Image src={image} alt="image result" boxSize="1000px" />
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
          <Text fontSize='2xl'>{message}</Text>
        </Box>
        <Box
          position="absolute"
          bottom="10%"
          left="50%"
          transform="translateX(-50%)"
          zIndex="1"
        >
          <Button colorScheme="blue" size='lg' onClick={displayHome}>
            Home
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default Result;
