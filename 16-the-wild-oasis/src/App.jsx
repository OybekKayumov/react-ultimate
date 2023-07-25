import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;


function App() {
 
  return (
    <>
    <GlobalStyles />
    <StyledApp>
      <Heading type='h1'>The Wild Oasis</Heading>

      <Heading type='h2'>Check In and Out</Heading>
      <Button>Check In</Button>
      <Input type="number" placeholder="Number of guests"/>

      <Heading as='h3'>Form</Heading>
    </StyledApp>
    </>
  )
}

export default App
