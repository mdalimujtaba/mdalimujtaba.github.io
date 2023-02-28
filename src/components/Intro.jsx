import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Resume from "../Resume/fw18_0758-Md-Ali-Mujtaba-Resume.pdf"
import { IoMdArrowDropright } from "react-icons/io";
// import { Typewriter } from 'react-simple-typewriter'
function Intro() {

  
  return (
   
   <Box id="Home"  bg="rgb(13,17,23)" h={'auto'} pb={'30px'}>
     <SimpleGrid
      bg="rgb(13,17,23)"
      columns={{ sm: 1, md: 1, lg: 2 }}
    height={['650px','580px','450px','500px']}
      width={['96%',"90%","86%","86%"]}
      ml={['2%',"5%","7%","7%"]}
      // border={'5px solid blue'}

    >
      <Box display={["flex", "flex", "flex", "none"]}
          justifyContent={["center", "center", "center", "center"]}>
        <Box
          // border="2px solid grey"
          width="200px"
          height="200px"
          margin={'auto'}
        >
          <Image
            src="https://i.postimg.cc/Y9vTtRSg/photo.png"
            margin="auto"
            borderRadius={"50%"}
            height={"fit-content"}
            width="fit-content"
            // border="1px solid white"
          />
        </Box>
      </Box>
      <Center
        // border="2px solid white"
        // bg={"red"}
        width={"100%"}
        height="auto"
      >
        <Stack direction=" column" spacing="40px">
            <Text
              textAlign={"center"}
              color={"white"}
              // border="1px solid blue"
              width={"100%"}
              fontSize="3xl"
              fontWeight={700}
            >
              
              Hi, I'm Md Ali Mujtaba
            </Text>
           
            <Text
              // border="1px solid blue"
              textAlign={"center"}
              color="rgb(225,29,72)"
              width={"100%"}
              fontSize={['3xl',"4xl","4xl","4xl"]}
              fontWeight={[600,600,700,700]}
              lineHeight={[1,1.5,1.5,1.5]}
              mt={['10px',0,0,0]}
              mb={['10px',0,0,0]}

            >

              A Full Stack Developer
            </Text>
            <Text
              // border="1px solid blue"
              color={"white"}
              width={"100%"}
              fontSize="xl"
              fontWeight={600}
              textAlign="center"
            >
              An enthusiastic Full Stack Web Developer with a strong set of
              technical as well as non-technical skills and a dedication towards
              creating useful and interactive web applications.
            </Text>

            <Flex
              // border={"1px solid blue"}
              alignContent={"center"}
              justifyContent={"space-between"}
              mt="5"
              ml={["2%","20%","30%","25%"]}
              width={["96%","60%","40%","50%"]}
            >
              <Link href="https://www.linkedin.com/in/md-ali-mujtaba-695921183/" target="_blank">
              <Box  width="40px" height="40px" _hover={{transform:'scale(1.1)', transition:'1s'}}>
                <Image src="https://i.postimg.cc/wxWTM5jk/icons8-linkedin-48-removebg-preview-1.png" borderRadius={'5px'}/>
              </Box>
              </Link>
              <Link href="https://github.com/mdalimujtaba"  target="_blank">
              <Box
                // border="1px solid white"
                width="40px"
                height="40px"
                marginLeft={"10px"}
                marginRight="10px"
                _hover={{transform:'scale(1.1)', transition:'1s'}}
              >
                <Image src="https://i.postimg.cc/FK9H1T3D/Git-Hub-Mark-Light-64px.png"/>
              </Box></Link>
              <Link href={Resume}  download="fw18_0758-Md-Ali-Mujtaba-Resume"  _hover={{textDecoration:"none"}}>
              <Button onClick={()=>window.open('https://drive.google.com/file/d/1lyovK3g9l_VXg91iN0F8YIABkGfYrwBN/view')}
                bg="white" color={'black'} height={"40px"} borderRadius='2xl' fontSize={'xl'} display={'flex'} alignItem="center">
                Resume
                < IoMdArrowDropright />
              </Button>
              </Link>
              

            </Flex>
          </Stack>
       
      </Center>
      <Box
        // border="2px solid grey"
        // bg={"grey"}
        width={"100%"}
        height="500px"
        
        display={["none", "none", "none", "flex"]}
      >
        <Image
          src="https://i.postimg.cc/Y9vTtRSg/photo.png"
          height={"70%"}
          borderRadius="30%"
          margin={'auto'}
        />
      </Box>
    </SimpleGrid>
   </Box>
  );
}
export default Intro;

