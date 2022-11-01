import { Box, Center, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

function GithubStats(){
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 12;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
    return(
        <Box bg="rgb(13,17,23)" h={'auto'} pb={'30px'}>
            <Box w={['86%']} ml={['7%']} 
            // border='1px solid white'
            >
                <Center
                //  border={"1px solid pink"}
                pt="30px">
                <Heading size={"xl"} color="white" fontWeight={500}>
                   My Github Calender
                </Heading>
                </Center>
                <Center color={'white'} mt="30px">
                <GitHubCalendar username="mdalimujtaba" color={'green'} >

                <ReactTooltip html delayShow={20}/>
                </GitHubCalendar>
                </Center>
                <Center
                //  border={"1px solid pink"}
                pt="30px">
                <Heading size={"xl"} color="white" fontWeight={500}>
                    My Statistics
                </Heading>
                </Center>
               
                <SimpleGrid  columns={[1,1,1,2]} spacing='40px' mt="30px">
                    <Image margin={'auto'} src="https://streak-stats.demolab.com?user=mdalimujtaba&theme=radical"/>
                    <Image margin={"auto"} src="https://github-readme-stats.vercel.app/api?username=mdalimujtaba&show_icons=true&theme=radical"/>
                </SimpleGrid>
            </Box>
        </Box>
    )
}
export default GithubStats