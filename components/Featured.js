import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";

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
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>Featured Product</Title>
              <Desc>
                This is an Awesome pink turtle with an attached chain for your
                keys or to be hanged anywhere you would like.
              </Desc>
              <Button>Read more</Button>
              <Button>Add to cart</Button>
            </div>
          </Column>
          <Column>
            <img
              src="https://crochetimages.s3.amazonaws.com/1692239918494.JPG"
              alt=""
            />
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
}
