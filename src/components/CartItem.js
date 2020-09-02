import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { removeItem } from "../actions";

const CartItem = (props) => {
  const dispatch = useDispatch();
  console.log("props", props);
  return (
    <>
      <CartItemWrapper>
        <ItemName>{props.name}</ItemName>
        <ItemQuantity>
          Quantity: {props.quantity}{" "}
          <button onClick={() => dispatch(removeItem(props))}>
            <p>x</p>
          </button>
        </ItemQuantity>
      </CartItemWrapper>
    </>
  );
};

/*
to get quantity, you need to use square brackets to get quantity when you buy more than one
of the same sticker, you want to look at the current quantity of that particular sticker you h
have, and go +1
*/

const CartItemWrapper = styled.div`
  height: 120px;
  margin: 5px;
  border: 2px dashed grey;
  color: white;
  width: 100%;
`;

const ItemName = styled.div`
  height: 50%;
`;

const ItemQuantity = styled.div`
  height: 50%;
  background-color: #25063d;
`;

export default CartItem;
