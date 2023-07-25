import styled, {css} from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: red"}
// `;

const Heading = styled.h1`
  ${props => props.type === 'h1' && 
  css`
    font-size: 3rem;
    font-weight: 600;
    background-color: green;  
  `}

  ${props => props.type === 'h2' && 
  css`
    font-size: 2rem;
    font-weight: 600;
    background-color: green;  
  `}

  ${props => props.type === 'h3' && 
  css`
    font-size: 1.5rem;
    font-weight: 500;
    background-color: green;  
  `}

`;

export default Heading;

// ${test}
