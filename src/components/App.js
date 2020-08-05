import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";

import Cart from "./Cart";

const App = () => {
  return (
    <Wrapper>
      <Left>
        <Header>
          <Logo />
        </Header>

        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
      </Left>
      <CartWrapper>
        <Cart />
      </CartWrapper>

      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const Header = styled.header`
  /* grid-area: header; */
  padding: 32px 64px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2.5;
  /* border: solid 5px blue; */
  height: 100vh;
  overflow: auto;
`;

const ItemGridWrapper = styled.main`
  /* grid-area: main; */
  padding: 16px 64px;
  /* border: solid 2px black; */
  height: 100vh;
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* grid-area: sidebar; */
  /* border: solid 2px green; */
  flex: 1;
  flex-grow: 1;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
  background-color: #51296e;
  height: 100vh;
  position: sticky;
`;

export default App;
