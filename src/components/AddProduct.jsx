import axios from "../axios";
import React, { useState } from "react";
import { styled } from "styled-components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [vendor, setVendor] = useState("");
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const addProduct = (e) => {
    e.preventDefault();
    axios
      .post("/products/add", { title, url, price, vendor, rating })
      .then(() => {
        setTitle("");
        setUrl("");
        setPrice(0);
        setVendor("");
        setRating(0);
      })
      .catch((err) => alert(err.message));
    toast.success("Added Successfully");
    navigate("/homepage");
  };

  return (
    <Container>
      <FormContainer>
        <h3>Add Product</h3>
        <InputContainer>
          <p>Title</p>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </InputContainer>
        <InputContainer>
          <p>ImageURL</p>
          <input
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </InputContainer>
        <InputContainer>
          <p>Vendor</p>
          <input
            type="text"
            onChange={(e) => setVendor(e.target.value)}
            value={vendor}
          />
        </InputContainer>
        <InputContainer>
          <p>Rating</p>
          <input
            type="number"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </InputContainer>
        <button className="btn btn-success" onClick={addProduct}>
          Add Product
        </button>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 15px;
  }
`;
const FormContainer = styled.form`
  border: 1px solid lightgrey;
  width: 55%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

export default AddProduct;
