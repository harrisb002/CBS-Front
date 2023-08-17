import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";

const BorderBox = styled(Link)`
  background-color: #c5ffed;
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

const Title = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  font-size: 1.2rem;
  margin: 0;
`;

const ProductWrapper = styled.div``;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const url = "/product/" + _id;

  return (
    <ProductWrapper>
      <BorderBox href={url}>
        <div>
          <img src={images[0]} alt="" />
        </div>
      </BorderBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button primary outline>
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
