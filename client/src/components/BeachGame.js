import axios from "axios";
import introImg from "../BeachTheme/1 Beach Intro.jpeg";
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

const BeachGame = ({ language }) => {
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
              Surfs Up! Disco, the Panda, here. I love the beach so I took a
              spontaneous flight to {country} for a weekend vacation. I want to
              meet some party animals. Help me speak {language} so I can meet my
              people?
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

export default BeachGame;
