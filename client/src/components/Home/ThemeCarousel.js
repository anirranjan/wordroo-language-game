"use client";

import React, { useState } from "react";
import {
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Card,
  CardBody,
  Image,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Grid,
  GridItem,
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

export default function ThemeCarousel() {
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "20%", md: "40px" });

  const cards = [
    {
      theme: "School Theme",
      lowestLevel: 1,
      highestLevel: 4,
      difficulty: "Beginner",
      description:
        "Master classroom vocabulary and phrases as you navigate through everyday school scenarios.",
      image: "/languageschool-start.png",
    },
    {
      theme: "Grocery Theme",
      lowestLevel: 5,
      highestLevel: 8,
      difficulty: "Intermediate",
      description:
        "Enhance your shopping lexicon as you interact with customers in a busy grocery store.",
      image: "/languagestorestart.png",
    },
    {
      theme: "Bakery Theme",
      lowestLevel: 9,
      highestLevel: 12,
      difficulty: "Advanced",
      description:
        "Learn deliciously fun language skills while running a bustling bakery and serving up treats.",
      image: "/languagebakery-start.png",
    },
    {
      theme: "Beach Theme",
      lowestLevel: 13,
      highestLevel: 16,
      difficulty: "Expert",
      description:
        "Dive into seaside conversations and vocabulary while enjoying sunny beach adventures.",
      image: "/languagebeach-start.png",
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
                    height="300px"
                    width="400px"
                  />
                  <Stack mt="4" spacing="2">
                    <Heading size="md">{card.theme}</Heading>
                    <Text>{card.description}</Text>
                  </Stack>
                  <ButtonGroup mt="4" spacing="4">
                    <Button variant="solid" colorScheme="blue">
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
