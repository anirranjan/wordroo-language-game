import axios from "axios";
import introImg from "../BakeryTheme/1 Bakery Intro.jpeg";
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
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const BakeryGame = ({ language }) => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .post("http://localhost:3001/getLocation", {
        targetLanguage: language,
      })
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.error("Error fetching location:", error);
      });
  }, []);

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const displayHome = () => {
    navigate("/");
  };

  return (
    <Center position="relative">
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hello!</ModalHeader>
          <ModalBody>
            <Text mb={4}>
              Good day! My name is BunBun, the Bunny. I recently moved to
              {country} to open up a bakery. I bake a variety of cakes, cookies,
              bread, and pies every day in my bakery! Can you help me speak
              {language} so that I can sell my baked goods to the local
              customers?
            </Text>
            <Image src={introImg} alt="Result Image" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={displayHome}>
              Home
            </Button>
            <Button variant="ghost" onClick={onClose} isLoading={loading}>
              Start
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default BakeryGame;
