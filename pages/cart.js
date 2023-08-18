import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Table from "@/components/Table";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1.7fr;
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #c5ffed;
  border-radius: 10px;
  padding: 30px;
`;

const CartInfo = styled.div`
  color: #40ffe8;
  font-weight: normal;
  font-size: 1.5rem;
  color: #800020;
`;

const ProductInfoCell = styled.td`
  img {
    max-width: 150px;
    max-height: 150px;
  }
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 1px;
  border: 3px solid rgba(255, 205, 210);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 6px;
    width: 70px;
    height: 70px;
    img {
      border-radius: 10px;
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

export default function CartPage() {
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    }
  }, [cartProducts]);

  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            {!cartProducts?.length && <CartInfo>No Items in Cart</CartInfo>}
            <Table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quanity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr>
                    <ProductInfoCell>
                      <ProductImageBox>
                        <img src={product.images[0]} alt="" />
                      </ProductImageBox>
                      {product.title}:
                    </ProductInfoCell>
                    <td>
                      {cartProducts.filter((id) => id === product._id).length}
                    </td>
                    <td>price</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Box>
          {!!products?.length && (
            <Box>
              <h2>Order Info</h2>
              <input type="text" placeholder="Address"></input>
              <input type="text" placeholder="Address 2"></input>
              <Button block primary>
                Continue to payment
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
