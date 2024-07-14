import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Box, Image, Heading, Text, Button } from '@chakra-ui/react'
import startImage from '../SchoolTheme/languageschool-start.png';
import image1 from '../SchoolTheme/languageschool-1.png';
import image2 from '../SchoolTheme/languageschool-2.png';
import image3 from '../SchoolTheme/languageschool-3.png';
import image4 from '../SchoolTheme/languageschool-4.png';


const GameBoard = () => {
    const location = useLocation();
    const { questions } = location.state || {};

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const images = [startImage, image1, image2, image3, image4];

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    const currentQuestion = questions[currentQuestionIndex];
    const currentImage = images[currentQuestionIndex];

    return (
        <Box p={8}>
            <Heading size="2xl">Question {currentQuestionIndex+1} </Heading>
            <Image boxSize="800px" src={currentImage} alt="Game Image" />
            <Text>{currentQuestion.scenario}</Text>
            <ul>
                {currentQuestion.answer_choices.map((choice) => (
                    <li>{choice}</li>
                ))}
            </ul>
            <Button colorScheme='blue' size='md' onClick={handleNextQuestion}>Next Question</Button>
        </Box>
    )
}

export default GameBoard