import styled from "styled-components";

// Styled component defined outside
const Heading = styled.h1`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin:20px
`;

const Headingg = styled.h1({
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    margin: '20px'
})
export default function Appx() {
    return (
        <>
            <h1>Styled component with JSX</h1>
            <Heading>Hello heading</Heading>
            <Heading>Hello heading</Heading>
            <Heading>Hello heading</Heading>
            <Heading>Hello heading</Heading>
            <Heading>Hello heading</Heading>
            <Headingg>Pranav</Headingg>
        </>
    );
}
