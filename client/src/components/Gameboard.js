import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Fade,
  Center,
  Input,
} from "@chakra-ui/react";
import startImage from "../SchoolTheme/languageschool-start.png";
import image1 from "../SchoolTheme/languageschool-1.png";
import image2 from "../SchoolTheme/languageschool-2.png";
import image3 from "../SchoolTheme/languageschool-3.png";
import image4 from "../SchoolTheme/languageschool-4.png";
import image5 from "../SchoolTheme/languageschool-5.png";
import image6 from "../SchoolTheme/languageschool-6.png";
import image7 from "../SchoolTheme/languageschool-7.png";
import image8 from "../SchoolTheme/languageschool-8.png";
import image9 from "../SchoolTheme/languageschool-9.png";
import image10 from "../SchoolTheme/languageschool-10.png";
import image11 from "../SchoolTheme/languageschool-11.png";
import image12 from "../SchoolTheme/languageschool-12.png";
import image13 from "../SchoolTheme/languageschool-13.png";
import image14 from "../SchoolTheme/languageschool-14.png";
import image15 from "../SchoolTheme/languageschool-15.png";
import image16 from "../SchoolTheme/languageschool-16.png";
import image17 from "../SchoolTheme/languageschool-17.png";
import image18 from "../SchoolTheme/languageschool-18.png";
import image19 from "../SchoolTheme/languageschool-19.png";

const GameBoard = () => {
  const location = useLocation();
  const { questions } = location.state || {};

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const images = [
    startImage,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
  ];

  const handleNextQuestion = () => {
    setShowQuestion(false);
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
      setShowQuestion(true);
    }, 500); // Adjust the timeout to match your desired transition duration
  };

  const renderQuestion = () => {
    if (currentQuestionIndex < 5) {
      return (
        <ul>
          {currentQuestion.answer_choices.map((choice, index) => (
            <li key={index}>{choice}</li>
          ))}
        </ul>
      );
    } else if (currentQuestionIndex < 10) {
      return <Input placeholder="Your answer" />;
    } else {
      return (
        <Box>
          <Input placeholder="Your answer" mb={4} />
          <ul>
            {currentQuestion.answer_choices.map((choice, index) => (
              <li key={index}>{choice}</li>
            ))}
          </ul>
        </Box>
      );
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentImage = images[currentQuestionIndex];

  return (
    <Center h="100vh">
      <Box position="relative">
        <Image
          src={currentImage}
          alt="Game Image"
          objectFit="cover"
          transition="opacity 0.5s ease-in-out"
        />
        <Fade in={showQuestion}>
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="rgba(0, 0, 0, 0.6)"
            color="white"
            p={20}
            borderRadius="md"
            zIndex="1"
            textAlign="center"
          >
            <Heading size="2xl" mb={4}>
              Question {currentQuestionIndex + 1}
            </Heading>
            <Text mb={4}>{currentQuestion.scenario}</Text>
            {renderQuestion()}
          </Box>
        </Fade>
        <Button
          colorScheme="blue"
          size="md"
          onClick={handleNextQuestion}
          position="absolute"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          zIndex="2"
        >
          Next Question
        </Button>
      </Box>
    </Center>
  );
};

export default GameBoard;
