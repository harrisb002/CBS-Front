import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

//Styled Components
const StyledHeader = styled.header`
  background-color: #630330;
`;
const Logo = styled(Link)`
  color: #e6e6fa;
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
  color: #aaa;
  font-size: 1.3rem;
  text-decoration: none;
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;

export default function Header() {
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
            <NavLink href={"/cart"}>Cart</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
