import {
  Text,
  Image,
  Button,
  Box,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const Result = ({ image, heading, message, homeRoute }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const displayHome = () => {
    navigate(homeRoute);
  };

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <Center h="100vh">
      {/* <Box position="relative">
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
          <Text>{message}</Text>
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
      </Box> */}
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalBody>
            <Text mb={4}>{message}</Text>
            <Image src={image} alt="Result Image" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={displayHome}>
              Home
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default Result;
