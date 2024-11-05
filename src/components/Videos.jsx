import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

function Videos() {
  const videosArr = [
    "https://videos.pexels.com/video-files/29102064/12572915_2560_1440_30fps.mp4",
    "https://videos.pexels.com/video-files/15510210/15510210-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/19587107/19587107-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/3729477/3729477-uhd_2560_1440_30fps.mp4",
    "https://videos.pexels.com/video-files/6473454/6473454-uhd_2560_1440_25fps.mp4",
  ];
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={["column", "row"]} h={"100vh"}>
      <VStack w={"full"}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: "100%" }}
        ></video>

        <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowX={"auto"}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is a sample video for testing and demo. this is called
            description.
          </Text>
        </VStack>
      </VStack>

      <VStack
        w={["full", "xl"]}
        alignItems={"stretch"}
        p={"8"}
        spacing={"8"}
        overflowY={"auto"}
      >
        {videosArr.map((item, index) => {
          return (
            <Button
              variant={"ghost"}
              colorScheme={"purple"}
              onClick={() => setVideoSrc(item)}
            >
              Lecture {index + 1}
            </Button>
          );
        })}
      </VStack>
    </Stack>
  );
}

export default Videos;
