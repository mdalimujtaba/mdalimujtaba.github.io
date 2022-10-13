import {
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={"rgb(30,41,59)"} height="80px"  position={'sticky'}
        zIndex='1030'
        top={0}
        right={0}
        left={0}>
        <Box
          // border={"1px solid white"}

          width="86%"
          h={"100%"}
          ml={["7%"]}
          display={["flex"]}
          justifyContent={["space-between"]}
        >
          <Flex
            width={["fit-content", "fit-content", "30%"]}
            height="100%"
            //   border="1px solid grey"
            justifyContent={["center"]}
            alignItems={["center"]}
          >
            <Text fontWeight={500} color={"white"} fontSize="25px" mr={"7px"}>
              Md{" "}
            </Text>
            <Text fontWeight={500} color={"white"} fontSize="25px" mr={"7px"}>
              {" "}
              Ali{" "}
            </Text>
            <Text fontWeight={500} color={"rgb(225,29,72)"} fontSize="25px">
              Mujtaba
            </Text>
          </Flex>
          <Flex
            width={["60%"]}
            height="100%"
            //   border="1px solid grey"
            alignItems={["center"]}
            justifyContent={"space-around"}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            }}
          >
            <Text
              fontSize={["20px"]}
              color={["white"]}
              _hover={{
                cursor: "pointer",
                textDecorationLine: "underline",
                textDecorationColor: "red",
                textDecorationThickness: "3px",
              }}
            >
              Home
            </Text>
            <Text
              fontSize={["20px"]}
              color={["white"]}
              _hover={{
                cursor: "pointer",
                textDecorationLine: "underline",
                textDecorationColor: "red",
                textDecorationThickness: "3px",
              }}
            >
              About
            </Text>
            <Text
              fontSize={["20px"]}
              color={["white"]}
              _hover={{
                cursor: "pointer",
                textDecorationLine: "underline",
                textDecorationColor: "red",
                textDecorationThickness: "3px",
              }}
            >
              Skills
            </Text>
            <Text
              fontSize={["20px"]}
              color={["white"]}
              _hover={{
                cursor: "pointer",
                textDecorationLine: "underline",
                textDecorationColor: "red",
                textDecorationThickness: "3px",
              }}
            >
              Projects
            </Text>
            <Text
              fontSize={["20px"]}
              color={["white"]}
              _hover={{
                cursor: "pointer",
                textDecorationLine: "underline",
                textDecorationColor: "red",
                textDecorationThickness: "3px",
              }}
            >
              Contact
            </Text>
          </Flex>
          <Box display={"flex"} alignItems="center">
            <Button
              onClick={onOpen}
              display={{ sm: "block", md: "block", lg: "none", xl: "none" }}
            >
              <HamburgerIcon size="100px" />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerFooter />
          <DrawerContent
            bg={"rgb(30,41,59)"}
            w={"100%"}
            mt={"80px"}
            height="400px"
            display={{ sm: "block", md: "block", lg: "none", xl: "none" }}
          >
            <DrawerBody
              w={{ sm: "94%", md: "84%" }}
              ml={{ sm: "3%", md: "8%" }}
              // border='1px solid white'
            >
              <Text
                fontSize={["20px"]}
                color={["white"]}
                mt="20px"
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                }}
              >
                Home
              </Text>
              <Text
                fontSize={["20px"]}
                color={["white"]}
                mt="40px"
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                }}
              >
                About
              </Text>
              <Text
                fontSize={["20px"]}
                color={["white"]}
                mt="40px"
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                }}
              >
                Skills
              </Text>
              <Text
                fontSize={["20px"]}
                color={["white"]}
                mt="40px"
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                }}
              >
                Projects
              </Text>
              <Text
                fontSize={["20px"]}
                color={["white"]}
                mt="40px"
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                }}
              >
                Contact
              </Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
export default Navbar;
