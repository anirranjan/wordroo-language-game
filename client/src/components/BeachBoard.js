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
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import startImage from "../BeachTheme/languagebeach-start.png";
import image1 from "../BeachTheme/languagebeach-1.png";
import image2 from "../BeachTheme/languagebeach-2.png";
import image3 from "../BeachTheme/languagebeach-3.png";
import image4 from "../BeachTheme/languagebeach-4.png";
import image5 from "../BeachTheme/languagebeach-5.png";
import image6 from "../BeachTheme/languagebeach-6.png";
import image7 from "../BeachTheme/languagebeach-7.png";
import image8 from "../BeachTheme/languagebeach-8.png";
import image9 from "../BeachTheme/languagebeach-9.png";
import image10 from "../BeachTheme/languagebeach-10.png";
import image11 from "../BeachTheme/languagebeach-11.png";
import image12 from "../BeachTheme/languagebeach-12.png";
import image13 from "../BeachTheme/languagebeach-13.png";
import image14 from "../BeachTheme/languagebeach-14.png";
import image15 from "../BeachTheme/languagebeach-15.png";
import image16 from "../BeachTheme/languagebeach-16.png";
import image17 from "../BeachTheme/languagebeach-17.png";
import image18 from "../BeachTheme/languagebeach-18.png";
import image19 from "../BeachTheme/languagebeach-19.png";
import winImage from "../BeachTheme/languagebeach-20.png";
import BeachGame from "./BeachGame";
import BeachWin from "./BeachWin";
import BeachLose from "./BeachLose";

const BeachBoard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { questions, language } = location.state;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [gameFinished, setGameFinished] = useState(false);
  const [answer, setAnswer] = useState("");
  const [fillAnswer, setFillAnswer] = useState("");
  const [answerIncorrect, setAnswerIncorrect] = useState(false);
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 100);
  };

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
      if (currentQuestionIndex < (questions?.length || 0) - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameFinished(true);
        // setTimeout(() => {
        //   navigate("/schoolwin");
        // }, 2000);
      }

      setTimeout(() => {
        setShowQuestion(true);
      }, 500);
    }, 1000);
  };

  const handleMCSubmit = (e) => {
    e.preventDefault();
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correct_answer) {
      console.log("Correct answer");
      incrementScore();
      handleNextQuestion();
    } else {
      console.log("Incorrect answer");
      setAnswerIncorrect(true);
      // setTimeout(() => {
      //   navigate("/schoollose");
      // }, 2000);
    }
  };

  const handleShortSubmit = (e) => {
    e.preventDefault();
    const currentQuestion = questions[currentQuestionIndex];
    if (
      fillAnswer.trim().toLowerCase() ===
      currentQuestion.correct_answer.trim().toLowerCase()
    ) {
      console.log("Correct answer");
      incrementScore();
      handleNextQuestion();
    } else {
      console.log(currentQuestion.correct_answer);
      setAnswerIncorrect(true);
      // setTimeout(() => {
      //   navigate("/schoollose");
      // }, 2000);
    }
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestionIndex < 5) {
      return (
        <>
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
            <Button type="submit" mt={10}>
              Submit Answer
            </Button>
          </FormControl>
        </>
      );
    } else if (currentQuestionIndex < 10) {
      return (
        <>
          <FormControl as="form" onSubmit={handleShortSubmit}>
            <Input
              placeholder="Your answer"
              value={fillAnswer}
              onChange={(e) => setFillAnswer(e.target.value)}
            />
            <Button type="submit" mt={10}>
              Submit Answer
            </Button>
          </FormControl>
        </>
      );
    } else {
      return (
        <>
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
            <Button type="submit" mt={10}>
              Submit Answer
            </Button>
          </FormControl>
        </>
      );
    }
  };

  const currentQuestion = questions?.[currentQuestionIndex] || {};
  const currentImage = gameFinished
    ? winImage
    : images[currentQuestionIndex] || startImage;

  return (
    <Center>
      <Box position="absolute" top="0" left="0" w="100%" zIndex="2">
        <BeachGame language={language} />
      </Box>
      <Grid
        h="200px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        w="100%"
      >
        <GridItem rowSpan={2} colSpan={2}>
          <Box
            bg="rgba(0, 0, 0, 0.6)"
            color="white"
            p={20}
            textAlign="center"
            h="100%"
          >
            {gameFinished ? (
              <>
                <Heading size="2xl" mb={4}>
                  Congratulations!
                </Heading>
                <Text mb={4}>
                  Thank you for helping me find my friends on the playground!
                </Text>
                <BeachWin />
              </>
            ) : answerIncorrect ? (
              <>
                <Heading size="2xl" mb={4}>
                  Incorrect!
                </Heading>
                <Text mb={4}>
                  The correct answer is {currentQuestion.correct_answer}
                </Text>
                <BeachLose />
              </>
            ) : (
              <Fade in={showQuestion}>
                <>
                  <Heading size="xl" mb={10}>
                    Question {currentQuestionIndex + 1}
                  </Heading>
                  <Text mb={10}>{currentQuestion.scenario}</Text>
                  {renderQuestion()}
                </>
              </Fade>
            )}
          </Box>
        </GridItem>
        <GridItem colSpan={3} position="relative">
          <Image
            src={currentImage}
            alt="Game Image"
            objectFit="cover"
            w="100%"
            h="100%"
          />
          <Stat position="absolute" top="10px" right="10px" zIndex="1">
            <Box
              border="2px"
              backgroundColor="rgba(255, 255, 255, 0.8)"
              borderRadius="md"
              padding="4"
              width="200px"
            >
              <StatLabel color="black">Current Score</StatLabel>
              <StatNumber color="black">{score}</StatNumber>
            </Box>
          </Stat>
        </GridItem>
      </Grid>
    </Center>
  );
};

export default BeachBoard;
