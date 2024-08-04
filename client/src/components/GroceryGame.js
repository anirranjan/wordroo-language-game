import axios from "axios";
import introImg from "../GroceryStoreTheme/1 Grocery Intro.jpeg";
import {
  Text,
  Image,
  Button,
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

const GroceryGame = ({ language }) => {
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
        setCountry(response.data); // Assuming res.data is an object/string directly from the response
      })
      .catch((error) => {
        console.error("Error fetching location:", error);
      });
  }, []);

  useEffect(() => {
    onOpen(); // Automatically opens the modal when the component mounts
  }, [onOpen]);

  const displayHome = () => {
    navigate("/");
  };

  const getGroceryQuestions = async (level) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/grocerylevel${level}`,
        {
          targetLanguage: "Spanish",
        }
      );
      return res.data; // Assuming res.data is already parsed as an object/array
    } catch (error) {
      console.error("getGroceryQuestions | Error:", error);
      return []; // Return an empty array in case of an error
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
    } finally {
      setLoading(false); // Stop the loading indicator once the operation is complete
    }
  };

  return (
    <Center position="relative">
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hello!</ModalHeader>
          <ModalBody>
            <Text mb={4}>
              Greetings! My name is Merlin, the dog. I am visiting {country} on
              a work trip. I am hungry and want to cook myself a meal. Can you
              help me speak {language} so that I can buy some things at the
              local grocery store?
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

export default GroceryGame;
