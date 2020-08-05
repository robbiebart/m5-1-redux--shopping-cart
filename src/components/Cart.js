import React from "react";
import styled from "styled-components";
import cartReducer from "../reducers";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers/index";

const Cart = () => {
  const state = useSelector((state) => state);
  const storeItems = useSelector(getStoreItemArray);

  console.log("store items", storeItems);
  console.log("state", state);
  return (
    <>
      <TitleDiv>
        <h2>Your Cart</h2>
        <h3>0 Items</h3>
        {storeItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.title}
              quantity={item.quantity}
            />
          );
        })}
      </TitleDiv>
      <TotalCost>Total: {}</TotalCost>
    </>
  );
};

/*
let priceArray = storeItems.filter((item) => {return storeItems.price})


const sum = [1, 2, 3].reduce((partial_sum, a) => partial_sum + a,0); 
console.log(sum);
*/

// const CartWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: solid 2px yellow;
// `;

const TitleDiv = styled.div`
  display: flex;
  flex-basis: fill;
  flex: 5;
  flex-direction: column;
  align-items: flex-start;
  /* border: solid 2px white; */
  overflow: scroll;
`;

const TotalCost = styled.div`
  flex-basis: fill;
  flex: 2;
  /* border: 2px solid white; */
  color: white;
`;

export default Cart;
