// Complete the Index page component using Chakra UI and react-icons
import { Box, Container, VStack, Text, Input, Button, HStack, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);
  const toast = useToast();

  const handleSendMessage = async () => {
    if (!message.trim()) {
      toast({
        title: "Error",
        description: "Cannot send an empty message.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate sending message and receiving response
    const sanitizedMessage = message.replace(/[\"\'\.,\?!]/g, ""); // Remove quotes and punctuation
    const response = `Response to: ${sanitizedMessage}`;
    setResponses([...responses, { query: sanitizedMessage, response }]);
    setMessage(""); // Clear input after sending
  };

  return (
    <Container maxW="container.md" centerContent p={5}>
      <VStack spacing={4} w="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Chat Application
        </Text>
        <VStack spacing={4} w="100%" alignItems="stretch">
          {responses.map((res, index) => (
            <Box key={index} p={4} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">You: {res.query}</Text>
              <Text>Bot: {res.response}</Text>
            </Box>
          ))}
        </VStack>
        <HStack w="100%">
          <Input placeholder="Type your message here..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} />
          <Button onClick={handleSendMessage} colorScheme="blue" leftIcon={<FaPaperPlane />}>
            Send
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
