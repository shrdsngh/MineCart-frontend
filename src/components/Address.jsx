import React, { useState } from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

const Address = () => {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const deliver = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_ADDRESS",
      item: {
        fullName,
        contact,
        email,
        address,
      },
    });
    navigate("/payment");
  };

  return (
    <Container>
      <Navbar />
      <Main>
        <FormContainer>
          <InputContainer>
            <p>Full Name</p>
            <input
              type="text"
              placeholder="John Doe"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </InputContainer>
          <InputContainer>
            <p>Email</p>
            <input
              type="email"
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </InputContainer>
          <InputContainer>
            <p>Contact Number</p>
            <input
              type="number"
              placeholder="9876XXXXXX"
              onChange={(e) => setContact(e.target.value)}
              value={contact}
            />
          </InputContainer>
          <InputContainer>
            <p>Address</p>
            <textarea
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </InputContainer>
          <button className="btn btn-warning" onClick={deliver}>
            Deliver Here
          </button>
        </FormContainer>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;
  margin: auto;
  background-color: rgb(234, 237, 237);
  position: relative;
`;
const Main = styled.div`
  padding: 15px;
`;
const FormContainer = styled.form`
  border: 1px solid lightgrey;
  width: 55%;
  min-width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
  margin: auto;
`;
const InputContainer = styled.div`
  width: 100%;
  padding: 20px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  textarea {
    width: 570px;
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

export default Address;
