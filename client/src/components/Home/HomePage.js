import React, { useState } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Select,
  VStack,
} from "@chakra-ui/react";
import ThemeCarousel from "./ThemeCarousel";
import BlobOverlay from "./BlobOverlay";

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleOnChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      <Container>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 7, md: 8 }}
          py={{ base: 15, md: 10 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Word
            <Text as={"span"} color={"#005f60"}>
              Roo
            </Text>
          </Heading>
          <a
            href="https://drive.google.com/file/d/18yqV8iwF02Cj9LPvYajW1ueaoDAsXHeN/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Game Rules</u>
          </a>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <Select
              placeholder="Select language"
              bg="white"
              w="400px"
              onChange={handleOnChange}
              value={selectedLanguage}
            >
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
              <option value="german">German</option>
              <option value="chinese">Mandarin Chinese</option>
              <option value="hindi">Hindi</option>
              <option value="bengali">Bengali</option>
              <option value="russian">Russian</option>
              <option value="portuguese">Portuguese</option>
              <option value="japanese">Japanese</option>
              <option value="punjabi">Punjabi</option>
              <option value="marathi">Marathi</option>
              <option value="telugu">Telugu</option>
              <option value="tamil">Tamil</option>
              <option value="kannada">Kannada</option>
              <option value="malayalam">Malayalam</option>
              <option value="korean">Korean</option>
              <option value="vietnamese">Vietnamese</option>
              <option value="italian">Italian</option>
              <option value="gujarati">Gujarati</option>
              <option value="urdu">Urdu</option>
              <option value="arabic">Arabic</option>
              <option value="swedish">Swedish</option>
              <option value="tagalog">Tagalog</option>
              <option value="farsi">Farsi (Persian)</option>
            </Select>
          </div>
        </Stack>
      </Container>
      <ThemeCarousel selectedLanguage={selectedLanguage} />
      <BlobOverlay />
    </>
  );
}
