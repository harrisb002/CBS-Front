import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";

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

export default function CartPage() {
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>Box 1</Box>
          <Box>
            <h2>Order Info</h2>
            <input type="text" placeholder="Address"></input>
            <input type="text" placeholder="Address 2"></input>
            <Button primary>Continue to payment</Button>
          </Box>
        </ColumnsWrapper>
      </Center>
    </>
  );
}
