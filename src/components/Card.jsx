import React from "react";
import styled from "@emotion/styled";
import { Rating } from "@mui/material";
import { useStateValue } from "../StateProvider";

function Card({ id, image, title, price, rating, vendor }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("Basket>>", basket);
  const addToBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        image,
        vendor,
        rating,
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
        <p>${price}</p>
        <h6>Vendor: {vendor}</h6>
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
