import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";

const BorderBox = styled.div`
  background-color: #dfeffe;
  padding: 20px;
  height: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  img {
    max-width: 100%;
    max-height: 150px;
    border-radius: 12px;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
`;

const ProductWrapper = styled.div``;

const ProductInfoBox = styled.div`
  margin-top: 10px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  return (
    <ProductWrapper>
      <BorderBox>
        <div>
          <img src={images[0]} alt="" />
        </div>
      </BorderBox>
      <ProductInfoBox>
        <Title>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button primary>
            <CartIcon />
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
