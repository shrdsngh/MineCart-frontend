import React from "react";
import { styled } from "styled-components";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getBasketTotal } from "../reducer";

function Navbar() {
  const [{ basket }, dispatch] = useStateValue();
  const logout = () => {
    console.log("logout clicked");
    dispatch({
      type: "EMPTY_BASKET",
    });
    localStorage.clear("user");
  };
  const navigate = useNavigate();
  return (
    <Container>
      <Inner>
        <Logo onClick={() => navigate("/homepage")}>
          <img src="./shopping-cart.png" alt="cart" />
        </Logo>
        <SearchBar>
          <input type="text" placeholder="search..." />
          <SearchIcon onClick={() => navigate("/addproduct")}>
            <img src="./Add1.png" alt="" />
          </SearchIcon>
        </SearchBar>
        <RightContainer>
          <NavButton onClick={() => navigate("/orders")}>
            <p>Return</p>
            <p>& Orders</p>
          </NavButton>
          <Link
            style={{ textDecoration: "none", marginRight: 15, color: "brown" }}
            to={"/login"}
            onClick={logout}
          >
            logout
          </Link>
          <BasketButton onClick={() => navigate("/checkout")}>
            <img src="./basket.png" alt="" />
            <p>{basket.length}</p>
          </BasketButton>
        </RightContainer>
      </Inner>
      <MobileSearchBar onClick={() => navigate("/addproduct")}>
        <input type="text" placeholder="search..." />
        <SearchIcon>
          <img src="./Add1.png" alt="" />
        </SearchIcon>
      </MobileSearchBar>
    </Container>
  );
}

const MobileSearchBar = styled.div`
  height: 75px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 10px;
  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 10px;
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  margin-bottom: 35px;
  img {
    width: 65px;
    height: 50px;
    margin-top: 40px;
    margin-bottom: 0px;
    margin-right: 15px;
  }
`;
const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 5px;
    }
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: blanchedalmond;
  display: flex;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 767px) {
    height: 190px;
    flex-direction: column;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;
const SearchIcon = styled.div`
  ${"" /* background-color: #febd69; */}
  background-color: greenyellow;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;

  img {
    width: 22px;
  }
`;
const NavButton = styled.div`
  color: brown;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
  margin-top: 15px;

  p {
    &:nth-child(1) {
      font-size: 12px;
      margin-bottom: -3px;
    }
    &:nth-child(2) {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
const BasketButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;
  img {
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
  }
  p {
    color: brown;
    font-weight: 500;
  }
`;

export default Navbar;
