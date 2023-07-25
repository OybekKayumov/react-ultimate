import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orange; */
  padding: 20px;
`;


function App() {
 
  return (
    <>
    <GlobalStyles />
    <StyledApp>
      <Row type='horizontal'>
        <Heading as='h1'>The Wild Oasis</Heading>
        <div>
          <Heading as='h2'>Check In and Out</Heading>
          <Button>Check In</Button>
          <Button>Check Out</Button>
        </div>
      </Row>

      <Row type='vertical'>
        <Heading as='h3'>Form</Heading>
        <form action="">
          <Input type="number" placeholder="Number of guests"/>
          <Input type="number" placeholder="Number of guests"/>
        </form>
      </Row>

    </StyledApp>
    </>
  )
}

export default App
