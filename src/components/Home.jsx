import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <div>
        <h1 className="homeHead">Welcome to MineCart</h1>
        <p className="summary">Login or Register from below buttons</p>
        <Link className="btn btn-primary lgbtn" to={"/login"}>
          Login
        </Link>
        <Link className="btn btn-success rgbtn" to={"/registration"}>
          Register
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;
  margin: auto;
  text-align: center;
  h1 {
    margin: 50px;
  }
  p {
    margin: 100px;
  }
  .btn {
    margin: 0px 20px;
  }
`;

export default Home;
