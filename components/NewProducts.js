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
  background-color: #c0e4f9;
  padding-top: 10px;
  padding-bottom: 150px;
`;

const ArrivalsTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

export default function NewProducts({ products }) {
  return (
    <Bg>
      <Center>
        <h2>New Arrivals</h2>
        <ProductsGrid>
          {products?.length > 0 &&
            products.map((product) => <ProductBox {...product} />)}
        </ProductsGrid>
      </Center>
    </Bg>
  );
}
