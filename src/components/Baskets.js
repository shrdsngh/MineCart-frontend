import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../reducer";

function Baskets({ image, title, price, id, vendor, rating, qty }) {
  const [{ basket }, dispatch] = useStateValue();

  const [quantity, setQuantity] = useState(qty);

  const navigate = useNavigate();

  const removeFromBasket = (e, id) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const totalAmount = Number(price) * Number(qty);

  useEffect(() => {}, []);

  const qtyAdd = (e) => {
    dispatch({
      type: "ADD_QUANTITY",
      item: {
        id: id,
        quantity: quantity,
      },
    });
    setQuantity(quantity + 1);
    console.log("Added", quantity);
  };

  const qtySubtract = (e) => {
    if (quantity > 1) {
      console.log("Subtracted", quantity);
      dispatch({
        type: "MINUS_QUANTITY",
        item: {
          id: id,
          quantity: quantity,
        },
      });
      setQuantity(quantity - 1);

      console.log("cannot go lower");
    }
  };

  return (
    <Product>
      <Image>
        <img src={image} alt="" />
      </Image>
      <Description>
        <h4>{title}</h4>
        <p>${price}</p>
        <p>
          Quantity:{" "}
          <button className="m-2 bg-danger rounded" onClick={qtySubtract}>
            ➖
          </button>
          {qty}
          <button className="m-2 bg-success rounded" onClick={qtyAdd}>
            ➕
          </button>
          {/* <select className="m-2 bg-warning rounded" onClick={qtyUpdate}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={(i = 1)} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select> */}
        </p>
        <p>Product Total: ${Number(totalAmount)}</p>
        <button onClick={() => navigate("/homepage")}>Add more</button>
        <button onClick={(e) => removeFromBasket(e, id)}>Remove</button>
      </Description>
    </Product>
  );
}

const Product = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 15px;
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
    margin-right: 10px;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default Baskets;
