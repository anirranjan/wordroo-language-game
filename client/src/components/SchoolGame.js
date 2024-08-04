import axios from "axios";
import introImg from "../SchoolTheme/1 School Intro.jpeg";
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

const SchoolGame = ({ language }) => {
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

  const getSchoolQuestions = async (level) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/schoollevel${level}`,
        {
          targetLanguage: "Spanish",
        }
      );
      return res.data; // Assuming res.data is already parsed as an object/array
    } catch (error) {
      console.error("getSchoolQuestions | Error:", error);
      return [];
    }
  };

  const getAllQuestions = async () => {
    setLoading(true);
    try {
      const level1Questions = await getSchoolQuestions(1);
      const level2Questions = await getSchoolQuestions(2);
      const level3Questions = await getSchoolQuestions(3);
      const level4Questions = await getSchoolQuestions(4);

      const allQuestions = [
        ...level1Questions,
        ...level2Questions,
        ...level3Questions,
        ...level4Questions,
      ];

      console.log(allQuestions);
      onClose();
    } catch (error) {
      console.error("getAllQuestions | Error:", error);
    } finally {
      setLoading(false);
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
              Hey guys! My name is Rusty, the fox. My family and I recently
              moved to {country} and today is my first day at school! Can you
              help me speak {language} so that I can make friends at my new
              school?
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

export default SchoolGame;
