import { Button, Container, Flex, useColorMode } from "@chakra-ui/react";
import { MdOutlineModeNight } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";
import { color } from "framer-motion";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <Flex 
      h={'100vh'} 
      flexDirection={'row'}
      alignItems={"center"}
      justifyContent={"center"}
      gap={4} >
        
        <Button w={100} h={100} onClick={toggleColorMode}>
          {colorMode === 'light' ? <MdOutlineModeNight size={50} color={"blue"}/> : <FaRegSun size={50} color={"orange"}/>}
        </Button>

        <Button w={100} h={100} fontSize={50} onClick={toggleColorMode}>
          {colorMode === 'light' ? "🌛" : "🌞"}
        </Button>

      </Flex>
    </Container>
  )
}

export default App
