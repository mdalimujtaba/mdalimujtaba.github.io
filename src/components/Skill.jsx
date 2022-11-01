import { Box, Center, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import {  SiHtml5} from "react-icons/si";

function Skills() {
    let Frontend_Skills=[
        {name:"HTML5",
        logo:"https://i.postimg.cc/7Ywz5hY2/html.png"
        },
        {name:"CSS5",
        logo:"https://i.postimg.cc/y872pm68/css-3.png"
        },
        {name:"JavaScript",
        logo:"https://i.postimg.cc/J76yzqg9/js.png"
        },
        {name:"React.Js",
        logo:"https://i.postimg.cc/XY8qtkwH/atom-1.png"
        },
        {name:"TypeScript",
        logo:"https://i.postimg.cc/fWpHp6ZL/typescript-original-logo-icon-146317.png"
        },
        {name:"Redux",
        logo:"https://i.postimg.cc/zvCRdb8T/redux-icon-132038.png"
        },
        {name:"MongoDB",
        logo:"https://i.postimg.cc/fyzwNJYc/mongodb-original-logo-icon-146424.png"
        },
        {name:"Express.Js",
        logo:"https://i.postimg.cc/d0wNnrFj/expressjs-logo-icon-169185.png"
        },
        {name:"Node.Js",
        logo:"https://i.postimg.cc/sfh8jVTS/nodejs-plain-wordmark-logo-icon-146410.png"
        },
        {name:"Chakra UI",
        logo:"https://i.postimg.cc/XYzmNp6f/rzyl-Ujaf-400x400.jpg"
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
            Skills
          </Heading>
        </Center>
        <SimpleGrid columns={[2,2,4,5]} gap={'30px'} mt="30px">
            {Frontend_Skills.map((item)=><Box bg="blackAlpha.500" w={['100px',"150px","150px","150px"]} h={["100px","150px","150px",'150px']} borderRadius={"10px"} margin={'auto'} >
                <Box w="30%" h={'30%'} ml="35%" mt={'30%'} borderRadius="5px"><Image borderRadius="5px" src={item.logo} bg='white' w='100%' h="100%"/></Box>
                <Box color="white" fontSize={'18px'} textAlign='center' mt={'5px'}>{item.name}</Box>
            </Box>)}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
export default Skills;
