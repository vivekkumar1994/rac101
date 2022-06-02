
import './App.css';
import { Accordion,AccordionButton,AccordionItem,Box,AccordionIcon,AccordionPanel,Breadcrumb,BreadcrumbItem,BreadcrumbLink, Button} from '@chakra-ui/react'
let breadcrumb = [ "Home", "India","Pune...."];
function App() {
  return (
    <div className="App">
       <Button colorScheme='pink' size='lg'>
    Button
  </Button>
  
  <Breadcrumb>
  {breadcrumb.map((breadcrumb,index) => (
 <BreadcrumbItem key = {index}>
 <BreadcrumbLink href='#' _hover = {{color:"red"}}
 >{breadcrumb}</BreadcrumbLink>
</BreadcrumbItem>


  ))}
 
</Breadcrumb>
  <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='2' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  
      
    </div>
  
  )
}

export default App;
