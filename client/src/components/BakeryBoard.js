import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Fade,
  Center,
  Input,
  FormControl,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import startImage from "../BakeryTheme/languagebakery-start.png";
import image1 from "../BakeryTheme/languagebakery-1.png";
import image2 from "../BakeryTheme/languagebakery-2.png";
import image3 from "../BakeryTheme/languagebakery-3.png";
import image4 from "../BakeryTheme/languagebakery-4.png";
import image5 from "../BakeryTheme/languagebakery-5.png";
import image6 from "../BakeryTheme/languagebakery-6.png";
import image7 from "../BakeryTheme/languagebakery-7.png";
import image8 from "../BakeryTheme/languagebakery-8.png";
import image9 from "../BakeryTheme/languagebakery-9.png";
import image10 from "../BakeryTheme/languagebakery-10.png";
import image11 from "../BakeryTheme/languagebakery-11.png";
import image12 from "../BakeryTheme/languagebakery-12.png";
import image13 from "../BakeryTheme/languagebakery-13.png";
import image14 from "../BakeryTheme/languagebakery-14.png";
import image15 from "../BakeryTheme/languagebakery-15.png";
import image16 from "../BakeryTheme/languagebakery-16.png";
import image17 from "../BakeryTheme/languagebakery-17.png";
import image18 from "../BakeryTheme/languagebakery-18.png";
import image19 from "../BakeryTheme/languagebakery-19.png";
import winImage from "../BakeryTheme/languagebakery-20.png";

const BakeryBoard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { questions } = location.state || {};

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [gameFinished, setGameFinished] = useState(false);
  const [answer, setAnswer] = useState("");
  const [fillAnswer, setFillAnswer] = useState("");
  const [answerIncorrect, setAnswerIncorrect] = useState(false);

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
    setAnswer("");
    setFillAnswer("");
    setShowQuestion(false);
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameFinished(true);
      }

      setTimeout(() => {
        gameFinished ? navigate("/bakerywin") : setShowQuestion(true);
      }, 500);
    }, 1000);
  };

  const handleMCSubmit = (e) => {
    e.preventDefault();
    if (answer === currentQuestion.correct_answer) {
      console.log("Correct answer");
      handleNextQuestion();
    } else {
      console.log("Incorrect answer");
      setAnswerIncorrect(true);
      setTimeout(() => {
        navigate("/bakerylose");
      }, 2000);
    }
  };

  const handleShortSubmit = (e) => {
    e.preventDefault();
    if (
      fillAnswer.trim().toLowerCase() ===
      currentQuestion.correct_answer.trim().toLowerCase()
    ) {
      console.log("Correct answer");
      handleNextQuestion();
    } else {
      console.log(currentQuestion.correct_answer);
      setAnswerIncorrect(true);
      setTimeout(() => {
        navigate("/bakerylose");
      }, 2000);
    }
  };
  const renderQuestion = () => {
    if (currentQuestionIndex < 5) {
      return (
        <FormControl as="form" onSubmit={handleMCSubmit}>
          <RadioGroup onChange={setAnswer} value={answer}>
            <Stack>
              {currentQuestion.answer_choices.map((choice, index) => (
                <Radio key={index} value={choice}>
                  {choice}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
          <Button type="submit">Submit Answer</Button>
        </FormControl>
      );
    } else if (currentQuestionIndex < 10) {
      return (
        <FormControl as="form" onSubmit={handleShortSubmit}>
          <Stack>
            {currentQuestion.answer_choices.map((choice, index) => (
              <Text key={index}>{choice}</Text>
            ))}
          </Stack>
          <Input
            placeholder="Your answer"
            value={fillAnswer}
            onChange={(e) => setFillAnswer(e.target.value)}
          />
          <Button type="submit">Submit Answer</Button>
        </FormControl>
      );
    } else if (currentQuestionIndex < 15) {
      return (
        <FormControl as="form" onSubmit={handleShortSubmit}>
          <Stack>
            {currentQuestion.answer_choices.map((choice, index) => (
              <Text key={index}>{choice}</Text>
            ))}
          </Stack>
          <Input
            placeholder="Your answer"
            value={fillAnswer}
            onChange={(e) => setFillAnswer(e.target.value)}
          />
          <Button type="submit">Submit Answer</Button>
        </FormControl>
      );
    } else {
      return (
        <FormControl as="form" onSubmit={handleMCSubmit}>
          <RadioGroup onChange={setAnswer} value={answer}>
            <Stack>
              {currentQuestion.answer_choices.map((choice, index) => (
                <Radio key={index} value={choice}>
                  {choice}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
          <Button type="submit">Submit Answer</Button>
        </FormControl>
      );
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentImage = gameFinished ? winImage : images[currentQuestionIndex];

  return (
    <Center h="100vh">
      <Box position="relative">
        <Image
          src={currentImage}
          alt="Game Image"
          objectFit="cover"
          transition="opacity 0.5s ease-in-out"
        />
        {gameFinished ? (
          <Fade in={true}>
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
                Congratulations!
              </Heading>
              <Text mb={4}>
                Thank you for helping me find my new customers!
              </Text>
            </Box>
          </Fade>
        ) : answerIncorrect ? (
          <Fade in="true">
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
                Incorrect!
              </Heading>
              <Text mb={4}>
                The correct answer is {currentQuestion.correct_answer}
              </Text>
            </Box>
          </Fade>
        ) : (
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
        )}
      </Box>
    </Center>
  );
};

export default BakeryBoard;
