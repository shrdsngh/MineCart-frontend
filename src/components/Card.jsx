import React, { useState } from "react";
import styled from "@emotion/styled";
import { Rating } from "@mui/material";
import { useStateValue } from "../StateProvider";
import { toast } from "react-toastify";

function Card({ id, image, title, price, rating, vendor, quantity }) {
  const [{ basket }, dispatch] = useStateValue();
  const loginDet = localStorage.user;
  // console.log("look", loginDet);
  // console.log("Basket>>", basket);
  const addToBasket = (e) => {
    e.preventDefault();
    toast.info("😁  Item Added", {
      autoClose: 500,
      position: toast.POSITION.TOP_CENTER,
    });
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        image,
        vendor,
        rating,
        quantity: 1,
      },
    });
  };

  return (
    <Container>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Description>
        <h5>{title}</h5>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />

        <h6>Vendor: {vendor}</h6>
        {/* <select
          className="m-2 bg-warning rounded"
          onClick={(e) => {
            setQuantity(Number(e.target.value));
          }}
        >
          {Array.from(Array(6), (e, i) => {
            return (
              <option key={(i = 1)} value={i + 1}>
                {i + 1}
              </option>
            );
          })}
        </select> */}
        <p>${price}</p>
        <button onClick={addToBasket}>Add To Cart</button>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: brown;
  z-index: 10;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  flex: 0.3;
  img {
    width: 180px;
    height: 130px;
  }
`;
const Description = styled.div`
width:90%
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
flex: 0.7;
padding: 10px;
h5{
    font-weight: 700;
    font-size: 16px;
}
p{
    font-weight: 700;
}
button{
    width: 100%;
    height: 33px;
    background-color: springgreen;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
`;

export default Card;
