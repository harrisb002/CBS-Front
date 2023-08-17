import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding-top: 30px;
`;

const Bg = styled.div`
  background-color: #1b8bb5;
  padding-top: 10px;
  padding-bottom: 150px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
`;

export default function NewProducts({ products }) {
  return (
    <Bg>
      <Center>
        <Title>New Arrivals</Title>
        <ProductsGrid>
          {products?.length > 0 &&
            products.map((product) => <ProductBox {...product} />)}
        </ProductsGrid>
      </Center>
    </Bg>
  );
}
