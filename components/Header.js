import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";

//Styled Components
const StyledHeader = styled.header`
  background-color: #c3b7ac;
`;
const Logo = styled(Link)`
  color: #000;
  font-weight: 600;
  font-width: normal;
  font-size: 1.5rem;
  text-decoration: none;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const NavLink = styled(Link)`
  color: #000;
  font-size: 1.7rem;
  text-decoration: none;
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>CBS</Logo>
          <StyledNav>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All Products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
