import { Box, Center, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import {
  BsLinkedin,
  BsGithub,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function Contact() {
  return (
    <>
    <Box id="Contact" bg="rgb(30,41,59)" h={"auto"}>
      <Box
        bg="blackAlpha.500"
        w={['100%','100%','60%',"60%"]}
        ml={['0%','0%','20%',"20%"]}
        borderRadius="10px"
        pb={"30px"}
      >
        <Center  pt="30px" >
          <Heading size={"xl"} color="white" fontWeight={500} >
            Contacts
          </Heading>
        </Center>
        <Center direction={"column"} mt="30px">
          <VStack gap={"7"}>
           <Link  href="https://github.com/mdalimujtaba"  target="_blank">
           <Box
              w={["110px"]}
              display={"flex"}
              justifyContent={["space-between"]}
              alignItems={["center"]}
              _hover={{transform:'scale(1.15)', transition:'1s',cursor:"pointer"}}
            >
              <BsGithub color="white" size={["25px"]} />
              <Text fontSize={"18px"} color={"white"}>
                Github
              </Text>
            </Box>
           </Link>
            <Link href="https://www.linkedin.com/in/md-ali-mujtaba-695921183/" target="_blank">
            <Box
              w={["110px"]}
              display={"flex"}
              justifyContent={["space-between"]}
              alignItems={["center"]}
              _hover={{transform:'scale(1.15)', transition:'1s' ,cursor:"pointer"}}
            >
              <BsLinkedin color="rgb(10,102,194)" size={["25px"]} />
              <Text fontSize={"18px"} color={"white"}>
                Linkedin
              </Text>
            </Box>
            </Link>

            <Box
              w={["180px"]}
              display={"flex"}
              justifyContent={["space-between"]}
              alignItems={["center"]}
              _hover={{transform:'scale(1.15)', transition:'1s'}}
            >
              <BsFillTelephoneOutboundFill color="white" size={["25px"]} />
              <Text fontSize={"18px"} color={"white"}>
                +91 9709045175
              </Text>
            </Box>
            <Link href="mailto:mdalimujtaba29850@gmail.com" target="_blank">
            <Box
              w={['280px','300px','300px',"300px"]}
              display={["flex"]}
              justifyContent={["space-between"]}
              alignItems={["center"]}
              _hover={{transform:'scale(1.15)', transition:'1s' ,cursor:"pointer"}}
            >
              <SiGmail color="white" size={["25px"]} />
              <Text fontSize={"18px"} color={"white"} >
                mdalimujtaba29850@gmail.com
              </Text>
            </Box>
            </Link>
          </VStack>
        </Center>
      </Box>
    </Box>
    <Center bg="black" w={'100%'} h='50px'>
            <Text color={'white'} fontWeight="500">Designed & Built by Md Ali Mujtaba © 2022</Text>
    </Center>
    </>
  );
}
export default Contact;
