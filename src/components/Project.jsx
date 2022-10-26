import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

function Project() {
  return (
    <Box bg={"rgb(30,41,59)"} h="1000px">
      <Box width={["86%"]} ml={["7%"]} border="1px solid white" h={["100%"]}>
        <Center border={"1px solid pink"} mt="30px">
          <Heading size={"xl"} color="white" fontWeight={500}>
            Project
          </Heading>
        </Center>
        <Box
          h={"auto"}
          display={["block", "block", "flex", "flex"]}
          borderRadius="10px"
          border={"2px solid white"}
          w={["96%", "86%", "86%", "70%"]}
          ml={["2%", "7%", "7%", "15%"]}
          mt={["30px"]}
          _hover={{transform:'scale(1.05)', transition:'1s'}}
          bg="rgb(13,17,23)"
        >
          <Box h={"auto"} w={["100%", "100%", "55%", "55%"]}>
            <Image
              src="https://i.postimg.cc/L6mwrqdY/Screenshot-1770.png"
              alt="cover_image"
              height={"100%"}
              w="100%"
              borderTopRadius={'10px'}
            />
          </Box>
          <Box
            h={["auto"]}
            // border={"1px solid red"}
            w={["100%", "100%", "45%", "45%"]}
            textAlign={"center"}
            p={["10px"]}
          >
            <Heading size={"lg"} color="white" mt={"10px"}>
              TimeCamp Clone
            </Heading>
            <Text color="white" size={["md"]} mt={"10px"}>
              Time-camp website is a time tracking application used to keep
              track of the team's work progress in an organizations.
            </Text>
            <Text
              color="white"
              fontSize={"20px"}
              fontWeight={["500"]}
              mt={"10px"}
            >
              Tech Stack Used
            </Text>
            <Text color="white" size={["md"]}>
              JavaScript | ReactJS | Chakra-UI | CSS | HTML
            </Text>
            <Box
              display={["flex"]}
              justifyContent={["space-around"]}
              mt={["10px"]}
            >
              <Button
                colorScheme="gray"
                color="black"
                rightIcon={<AiFillGithub />}
              >
                Source Code
              </Button>
              <Button
                colorScheme="gray"
                color="black"
                rightIcon={<FiExternalLink />}
              >
                Live
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Project;
