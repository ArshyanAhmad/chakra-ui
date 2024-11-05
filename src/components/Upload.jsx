import { Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import React from "react";

function Upload() {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
        <AiOutlineCloudUpload size={"10vmax"} />

        <form>
          <HStack>
            <Input
              type={"file"}
              required
              css={{
                "&::file-selector-button": {
                  border: "none",
                  width: "calc(100% + 36px)",
                  height: "100%",
                  marginLeft: "-18px",
                  color: "purple",
                  backgroundColor: "white",
                  cursor: "pointer",
                },
              }}
            />
            <Button colorScheme={"purple"} type={"submt"}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
}

export default Upload;
