import { Box, Center, Heading, Image, SimpleGrid } from "@chakra-ui/react";


function Tools() {
    let Tools=[
        {name:"Github",
        logo:"https://i.postimg.cc/NM6xSbMb/github-logo-icon-icons-com-73546.png"
        },
        {name:"NPM",
        logo:"https://i.postimg.cc/RCb39KHT/npm-old-icon-132179.png"
        },
        {name:"Netlify",
        logo:"https://i.postimg.cc/fR7T39Jp/file-type-netlify-icon-130354.png"
        },
        {name:"Postman",
        logo:"https://i.postimg.cc/dtwJb0W9/postman-macos-bigsur-icon-189815.png"
        },
        {name:"Git",
        logo:"https://i.postimg.cc/CLhVvQ1P/file-type-git-icon-130581.png"
        },
        {name:"Json Server",
        logo:"https://i.postimg.cc/Bnf29HrV/file-type-light-json-icon-130455.png"
        },
       
        

    ]
  return (
    <Box bg="rgb(30,41,59)" h={"auto"} pb={"30px"}>
      <Box w={["86%"]} ml={["7%"]}
    //    border="1px solid white"
       >
        <Center
        //    border={"1px solid pink"}
          pt="30px"
        >
          <Heading size={"xl"} color="white" fontWeight={500}>
            Tools
          </Heading>
        </Center>
        <SimpleGrid columns={[2,2,4,4]} gap={'30px'} mt="30px">
            {Tools.map((item)=><Box key={item.name} bg="blackAlpha.500" w={['100px',"150px","150px","150px"]} h={["100px","150px","150px",'150px']} borderRadius={"10px"} margin={'auto'} >
                <Box w="30%" h={'30%'} ml="35%" mt={'30%'} borderRadius="5px"><Image borderRadius="5px" src={item.logo} bg='white' w='100%' h="100%"/></Box>
                <Box color="white" fontSize={'18px'} textAlign='center' mt={'5px'}>{item.name}</Box>
            </Box>)}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
export default Tools;
