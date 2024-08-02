import React from "react";
import { Stack, Text, Button, Input } from "@chakra-ui/react";

export default function QuestionCard({ question, onAnswerChange, onSubmit }) {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm" bgColor="white">
      <Text fontSize="sm" fontWeight="semibold">
        {question}
      </Text>
      <Input placeholder="Your answer" onChange={onAnswerChange} />
      <Button colorScheme="green" onClick={onSubmit}>
        Submit
      </Button>
    </Stack>
  );
}
