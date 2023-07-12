import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import styled from "@emotion/styled";
import Navbar from "./Navbar";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";
import Baskets from "./Baskets";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const proceed = () => {
    navigate("/address");
  };

  console.log("checkout >>>", basket);
  return (
    <Container>
      <Navbar />

      <Main>
        <ShoppingCart>
          <h2>Shopping Cart</h2>

          {basket?.map((product, index) => {
            return (
              <Baskets
                key={index}
                qty={product.quantity}
                image={product.image}
                title={product.title}
                price={product.price}
                id={product.id}
                vendor={product.vendor}
                rating={product.rating}
              />
            );
          })}
        </ShoppingCart>

        <Subtotal>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ({basket.length} items) :<strong>{value}</strong>
                </p>
                <small>
                  <input type="checkbox" />
                  <span>This order contains a gift.</span>
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={" $ "}
          />

          <button onClick={proceed}>Proceed to Checkout</button>
        </Subtotal>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  height: fit-content;
  margin: auto;
  background-color: rgb(234, 237, 237);
  border: 1px solid red;
  position: relative;
`;
const Main = styled.div`
  display: flex;
  padding: 15px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ShoppingCart = styled.div`
  padding: 15px;
  background-color: #fff;
  flex: 0.7;

  @media only screen and (max-width: 1200px) {
    flex: none;
  }

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 15px;
  }
`;
const Subtotal = styled.div`
  flex: 0.3;
  background-color: white;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }

  p {
    font-size: 15px;
  }
  small {
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
      margin-left: 10px;
    }
  }
  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #ffd814;
    border: none;
    border-radius: 10px;
    outline: none;
  }
`;
const Product = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.div`
  flex: 0.3;
  img {
    width: 100%;
  }
`;
const Description = styled.div`
  flex: 0.7;
  h4 {
    font-weight: 600;
    font-size: 18px;
    margin-left: 10px;
  }
  p {
    font-weight: 600;
    margin-top: 10px;
    margin-left: 10px;
  }
  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-left: 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Checkout;
