import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import axios from "../axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.post("/orders/get").then((res) => setOrders(res.data));
  }, []);
  console.log(orders);
  return (
    <Container>
      <Navbar />
      <Main>
        <OrderContainer>
          <h2>Your Orders</h2>
          {orders.map((order) => {
            return (
              <OrderDetail>
                <OrderBasket>
                  <h4>Order</h4>
                  <p>
                    Subtotal: $ <span>{order.price}</span>
                  </p>
                  {order.products.map((product) => {
                    return (
                      <Product>
                        <Image>
                          <img src={product.image} alt="" />
                        </Image>
                        <Description>
                          <h4>{product.title}</h4>
                          <p>$ {product.price}</p>
                          <p>Vendor: {product.vendor}</p>
                        </Description>
                      </Product>
                    );
                  })}
                </OrderBasket>
              </OrderDetail>
            );
          })}
        </OrderContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;
  margin: auto;
  background-color: rgb(234, 237, 237);
`;
const Main = styled.div`
  min-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const OrderContainer = styled.div`
  padding: 15px;
  background-color: white;
  width: 95%;

  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 15px;
  }
`;
const OrderDetail = styled.div`
  border-bottom: 1px solid lightgrey;
  padding-bottom: 20px;
`;
const OrderBasket = styled.div`
  margin-top: 20px;
  p {
    font-size: 15px;
    margin-left: 15px;
    margin-top: 15px;

    span {
      font-weight: 600;
    }
  }
`;
const Product = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.div`
  flex: 0.15;
  img {
    width: 70%;
  }
`;
const Description = styled.div`
  flex: 0.7;
  h4 {
    font-weight: 600;
    font-size: 18px;
    margin-left: 10px;
    @media only and screen (max-width: 1200px) {
      font-size: 14px;
    }
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

export default Orders;