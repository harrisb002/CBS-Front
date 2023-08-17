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
  padding-bottom: 100%;
`;

export default function NewProducts({ products }) {
  return (
    <Bg>
      <Center>
        <ProductsGrid>
          {products?.length > 0 &&
            products.map((product) => <ProductBox {...product} />)}
        </ProductsGrid>
      </Center>
    </Bg>
  );
}
