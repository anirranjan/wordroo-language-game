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

  const getBakeryQuestions = async (level) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/bakerylevel${level}`,
        {
          targetLanguage: selectedLanguage,
        }
      );
      //console.log(typeof res.data)
      const responseData = JSON.parse(res.data);
      console.log(responseData);
      return responseData;
    } catch (error) {
      console.error("getBakeryQuestions | Error:", error);
    }
  };

  const getGroceryQuestions = async (level) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/grocerylevel${level}`,
        {
          targetLanguage: selectedLanguage,
        }
      );
      //console.log(typeof res.data)
      const responseData = JSON.parse(res.data);
      console.log(responseData);
      return responseData;
    } catch (error) {
      console.error("getGroceryQuestions | Error:", error);
    }
  };

  const getBeachQuestions = async (level) => {
    try {
      const res = await axios.post(`http://localhost:3001/beachlevel${level}`, {
        targetLanguage: selectedLanguage,
      });
      //console.log(typeof res.data)
      const responseData = JSON.parse(res.data);
      console.log(responseData);
      return responseData;
    } catch (error) {
      console.error("getBeachQuestions | Error:", error);
    }
  };

  const getAllQuestions = async (theme, link) => {
    setLoading(true);
    let allQuestions = [];
    console.log("Theme: " + theme);
    try {
      if (theme === "School Theme") {
        const level1Questions = await getSchoolQuestions(1);
        const level2Questions = await getSchoolQuestions(2);
        const level3Questions = await getSchoolQuestions(3);
        const level4Questions = await getSchoolQuestions(4);

        allQuestions = [
          ...level1Questions,
          ...level2Questions,
          ...level3Questions,
          ...level4Questions,
        ];
        navigate("/schoolboard", {
          state: { questions: allQuestions, language: selectedLanguage },
        });
      } else if (theme === "Grocery Theme") {
        const level1Questions = await getGroceryQuestions(5);
        const level2Questions = await getGroceryQuestions(6);
        const level3Questions = await getGroceryQuestions(7);
        const level4Questions = await getGroceryQuestions(8);

        allQuestions = [
          ...level1Questions,
          ...level2Questions,
          ...level3Questions,
          ...level4Questions,
        ];
        console.log("All Question:");
        console.log(allQuestions);
        navigate("/storeboard", {
          state: { questions: allQuestions, language: selectedLanguage },
        });
      } else if (theme === "Bakery Theme") {
        const level1Questions = await getBakeryQuestions(9);
        const level2Questions = await getBakeryQuestions(10);
        const level3Questions = await getBakeryQuestions(11);
        const level4Questions = await getBakeryQuestions(12);

        allQuestions = [
          ...level1Questions,
          ...level2Questions,
          ...level3Questions,
          ...level4Questions,
        ];
        navigate("/bakeryboard", {
          state: { questions: allQuestions, language: selectedLanguage },
        });
      } else {
        const level1Questions = await getBeachQuestions(13);
        const level2Questions = await getBeachQuestions(14);
        const level3Questions = await getBeachQuestions(15);
        const level4Questions = await getBeachQuestions(16);

        allQuestions = [
          ...level1Questions,
          ...level2Questions,
          ...level3Questions,
          ...level4Questions,
        ];
        navigate("/beachboard", {
          state: { questions: allQuestions, language: selectedLanguage },
        });
      }
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
                      onClick={() => getAllQuestions(card.theme, card.link)}
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
