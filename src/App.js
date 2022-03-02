import styled from "styled-components";
import "./styles.css";

const Wrapper = styled.div`
  border: 5px solid aqua;
  border-color: green;
  padding: 10px;
  width: 200px;
  margin: auto;
  p {
    color: red;
  }
  h3 {
    color: blue;
  }
`;

export default function App() {
  return (
    <div className="App">
      <h3>Styled Components</h3>
      <Wrapper>
        <p>Hello</p>
        <h3>I am the boss</h3>
      </Wrapper>
    </div>
  );
}
