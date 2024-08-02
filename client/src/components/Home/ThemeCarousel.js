"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  useBreakpointValue,
  Stack,
  HStack,
  Heading,
  Text,
  Card,
  CardBody,
  Image,
  CardFooter,
  ButtonGroup,
  Button,
  Grid,
  GridItem,
  Tag,
  Box,
} from "@chakra-ui/react";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ThemeCarousel({ selectedLanguage }) {
  const [slider, setSlider] = useState(null);
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:3001/getLocation", {
        targetLanguage: selectedLanguage,
      })
      .then((response) => {
        const resData = JSON.parse(response.data);
        setCountry(resData);
      });
  }, []);

  const getSchoolQuestions = async (level) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/schoollevel${level}`,
        {
          targetLanguage: selectedLanguage,
        }
      );
      //console.log(typeof res.data)
      const responseData = JSON.parse(res.data);
      console.log(responseData);
      return responseData;
    } catch (error) {
      console.error("getSchoolQuestions | Error:", error);
    }
  };

  const getAllQuestions = async (link) => {
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
      navigate(link, { state: { questions: allQuestions } });
    } catch (error) {
      console.error("getAllQuestions | Error:", error);
    }
  };

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "20%", md: "40px" });

  const getDifficultyColor = (difficulty) => {
    if (difficulty === "Beginner") {
      return "green";
    } else if (difficulty === "Intermediate") {
      return "yellow";
    } else if (difficulty === "Advanced") {
      return "orange";
    } else {
      return "red";
    }
  };

  const cards = [
    {
      theme: "School Theme",
      levels: "Levels 1-4",
      difficulty: "Beginner",
      description:
        "Master classroom vocabulary and phrases as you navigate through everyday school scenarios.",
      image: "/languageschool-start.png",
      link: "/schoolboard",
    },
    {
      theme: "Grocery Theme",
      levels: "Levels 5-8",
      difficulty: "Intermediate",
      description:
        "Enhance your shopping lexicon as you interact with customers in a busy grocery store.",
      image: "/languagestorestart.png",
      link: "/storeboard",
    },
    {
      theme: "Bakery Theme",
      levels: "Levels 9-12",
      difficulty: "Advanced",
      description:
        "Learn deliciously fun language skills while running a bustling bakery and serving up treats.",
      image: "/languagebakery-start.png",
      link: "/bakeryboard",
    },
    {
      theme: "Beach Theme",
      levels: "Levels 13-16",
      difficulty: "Expert",
      description:
        "Dive into seaside conversations and vocabulary while enjoying sunny beach adventures.",
      image: "/languagebeach-start.png",
      link: "/beachboard",
    },
  ];

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Grid
          h="400px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
          maxWidth="1200px"
          mx="auto"
        >
          {cards.map((card, index) => (
            <GridItem
              colSpan={{ base: 4, md: 2 }}
              key={index}
              bg="papayawhip"
              width="400px"
            >
              <Card width="100%" maxWidth="500px" mx="auto" height="500px">
                <CardBody>
                  <Image
                    src={card.image}
                    alt={card.theme}
                    borderRadius="lg"
                    height="270px"
                    width="400px"
                  />
                  <Stack mt="4" spacing="2">
                    <Heading size="md">{card.theme}</Heading>
                    <HStack>
                      <Tag
                        size="md"
                        variant="solid"
                        colorScheme={getDifficultyColor(card.difficulty)}
                      >
                        {card.difficulty}
                      </Tag>
                      <Tag size="md" variant="solid">
                        {card.levels}
                      </Tag>
                    </HStack>
                    <Text>{card.description}</Text>
                  </Stack>
                  <ButtonGroup mt="4" spacing="4">
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      onClick={() => getAllQuestions(card.link)}
                      isLoading={loading}
                    >
                      Start
                    </Button>
                  </ButtonGroup>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
}
