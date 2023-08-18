import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const BorderBox = styled(Link)`
  background-color: #6082b6;
  padding: 4px;
  height: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  img {
    max-width: 180px;
    max-height: 180px;
  }
  @media screen and (min-width: 768px) {
    padding: 4px;
    width: 180px;
    height: 180px;
    img {
      border-radius: 20px;
      max-width: 180px;
      max-height: 180px;
    }
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 1.2rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductWrapper = styled.div``;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
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
          <Button onClick={() => addProduct(_id)} primary outline>
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
