import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styled from "@emotion/styled";
import Card from "./Card";
import axios from "../axios";

function Homepage() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    };

    const fetchdata = async () => {
      const data = await axios.get("/products/get", config);
      setProducts(data);
    };
    fetchdata();
  }, []);

  // setToken();

  return (
    <Container>
      <Navbar />
      <Banner>
        <img src="./banner.jpg" alt="" />
      </Banner>
      <Main>
        {products &&
          products?.data.map((product) => {
            return (
              <Card
                id={product._id}
                image={product.url}
                price={product.price}
                rating={product.rating}
                title={product.title}
                vendor={product.vendor}
                quantity={product.quantity}
              />
            );
          })}
      </Main>
    </Container>
  );
}

export default Homepage;

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
`;
const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );
  }
`;
const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;
  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0px;
  }
  /* Tablets */
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }
  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;
