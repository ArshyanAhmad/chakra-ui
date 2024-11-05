import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";

function Footer() {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"} px={"4"}>
          <Heading
            size="md"
            textTransform={"uppercase"}
            textAlign={["center", "left"]}
          >
            Subscribe to get more amazing video
          </Heading>

          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input
              placeholder="Enter Email Here..."
              borderRadius={"none"}
              border={"none"}
              outline={"none"}
              focusBorderColor={"none"}
            />
            <Button
              p={"0"}
              colorScheme={"purple"}
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading size={"md"} textAlign={"center"} textTransform={"uppercase"}>
            Video Tent
          </Heading>
          <Text>All rights recieved</Text>
        </VStack>

        <VStack w={"full"}>
          <Heading size={"md"} textTransform={"uppercase"}>
            Social Media
          </Heading>
          <Button variant={"link"} colorScheme={"whiteAlpha"}>
            <a target="blank" href="https://youtube.com">
              Youtube
            </a>
          </Button>

          <Button variant={"link"} colorScheme={"whiteAlpha"}>
            <a target="blank" href="https://instagram.com">
              Instagram
            </a>
          </Button>

          <Button variant={"link"} colorScheme={"whiteAlpha"}>
            <a target="blank" href="https://github.com">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
