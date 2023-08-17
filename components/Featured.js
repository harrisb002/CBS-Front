import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-width: normal;
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Title>Featured Product</Title>
        <Desc>
          This is an Awesome pink turtle with an attached chain for your keys or
          to be hanged anywhere you would like.
        </Desc>
      </Center>
    </Bg>
  );
}
