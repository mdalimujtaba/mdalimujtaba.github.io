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
  Link,
} from "@chakra-ui/react";
import Resume from "../Resume/fw18_0758-Md-Ali-Mujtaba-Resume.pdf"

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
            <Link href="#Home" >
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
           
            </Link>
            <Link href="#Skills">
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
            </Link>
            <Link href="#Project">
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
              </Link>
              <Link href="#Contact">
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
              </Link>
           <Link  href={Resume} download="fw18_0758-Md-Ali-Mujtaba-Resume">
           <Text
              fontSize={["20px"]}
              color={["white"]}
              _hover={{
                cursor: "pointer",
                textDecorationLine: "underline",
                textDecorationColor: "red",
                textDecorationThickness: "3px",
              }}
              onClick={()=>window.open('https://drive.google.com/file/d/1lyovK3g9l_VXg91iN0F8YIABkGfYrwBN/view')}
              
            >
              Resume
            </Text>
           </Link>
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
            height="360px"
            display={{ sm: "block", md: "block", lg: "none", xl: "none" }}
          >
            <DrawerBody
              w={{ sm: "94%", md: "84%" }}
              ml={{ sm: "3%", md: "8%" }}
              // border='1px solid white'
            >
              <Link href="#Home" onClick={onClose}>

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
                </Link>
                <Link href="#Skills" onClick={onClose}>

             
              <Text
                fontSize={["20px"]}
                color={["white"]}
                mt="35px"
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                }}
                >
                Skills
              </Text>
                </Link>
                <Link href="#Project" onClick={onClose}>

              <Text
                fontSize={["20px"]}
                color={["white"]}
                mt="35px"
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                }}
                >
                Projects
              </Text>
                </Link>
                <Link href="#Contact" onClick={onClose}>

              <Text
                fontSize={["20px"]}
                color={["white"]}
                mt="35px"
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                }}
                >
                Contact
              </Text>
                </Link>
              <Link  href={Resume}   download="fw18_0758-Md-Ali-Mujtaba-Resume">
           <Text
              fontSize={["20px"]}
              color={["white"]}
              mt="35px"
              _hover={{
                cursor: "pointer",
                textDecorationLine: "underline",
                textDecorationColor: "red",
                textDecorationThickness: "3px",
                
              }}
              
              onClick={()=>window.open('https://drive.google.com/file/d/1lyovK3g9l_VXg91iN0F8YIABkGfYrwBN/view')}
              
            >
              Resume
            </Text>
           </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
export default Navbar;
