import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  background-color: #22;
`;

export default function Featured() {
  return (
    <div>
      <Center>
        <h1>Featured Product</h1>
        <p>
          This is an Awesome pink turtle with an attached chain for your keys or
          to be hanged anywhere you would like.
        </p>
      </Center>
    </div>
  );
}
