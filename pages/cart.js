import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
            {cartProducts?.length > 0 && (
              <>
                <h2>Cart</h2>
                {products.map((product) => (
                  <div>
                    {product.title}:{" "}
                    {cartProducts.filter((id) => id === product._id).length}
                  </div>
                ))}
              </>
            )}
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
