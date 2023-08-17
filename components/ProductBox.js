import styled from "styled-components";

const BorderBox = styled.div`
  background-color: #dfeffe;
  padding: 20px;
  img {
    max-width: 100%;
    max-height: 150px;
  }
`;

const ProductWrapper = styled.div``;

export default function ProductBox({ _id, title, description, price, images }) {
  return (
    <ProductWrapper>
      <BorderBox>
        <img src={images[0]} alt="" />
      </BorderBox>
      {title}
    </ProductWrapper>
  );
}
