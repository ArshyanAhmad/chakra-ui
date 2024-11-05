import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          margin={"auto"}
          my={"16"}
        >
          <Heading textAlign={"center"}>Video Tent</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"} />

          <Input
            placeholder={"Name"}
            type={"text"}
            required
            focusBorderColor={"purple"}
          ></Input>

          <Input
            placeholder={"Email"}
            type={"email"}
            required
            focusBorderColor={"purple"}
          ></Input>

          <Input
            placeholder={"Password"}
            type={"password"}
            required
            focusBorderColor={"purple"}
          ></Input>

          <Button colorScheme={"purple"} type={"submit"}>
            Login
          </Button>

          <Text textAlign={"right"}>
            Already Signed Up? {"   "}
            <Button variant={"link"} colorScheme={"purple"}>
              <Link to={"/login"}>Log in</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default Signup;
