import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../axios";
import { useStateValue } from "../StateProvider";

const Login = () => {
  const [password, passwordUpdate] = useState("");
  const [email, emailUpdate] = useState("");

  const usenavigate = useNavigate();
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      usenavigate("/homepage");
    }
    // sessionStorage.clear();
  }, [usenavigate]);

  const ProceedLogin = async (e) => {
    e.preventDefault();
    let obj = { email, password };
    console.warn(obj);
    if (validate()) {
      axios
        .post("/login", { email, password })
        .then((res) => {
          if (!res.data.error) {
            dispatch({
              type: "SET_USER",
              user: res.data,
            });

            localStorage.setItem(
              "user",
              JSON.stringify(res.data.userDetail.email)
            );
            localStorage.setItem("token", JSON.stringify(res.data.auth));
            toast.success("Login Successful", { autoClose: 1000 });
            usenavigate("/homepage");
          } else if (res.data.error) {
            toast.error("enter correct credentials");
          }
        })
        .catch((err) => console.warn(err));
      //Partition here
      // let result = await fetch("http://localhost:3001/login", {
      //   method: "post",
      //   headers: { "content-type": "application/json" },
      //   body: JSON.stringify(obj),
      // });
      // console.log("here");
      // result = await result.json();
      // console.warn("result", result);
      // if (result.id) {
      //   localStorage.setItem("user", JSON.stringify(result.email));
      //   toast.success("Login Successful");
      //   usenavigate("/homepage");
      // } else {
      //   toast.error("Enter correct credentials");
      // }
      //Partition Here
      //  implement Login
      //  console.log("proceed");
      // fetch("http://localhost:3001/login/" + username)
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((resp) => {
      //     //  console.log(resp)
      //     if (Object.keys(resp).length === 0) {
      //       toast.error("Username not found");
      //     } else {
      //       if (resp.password === password) {
      //         if (resp.email === email) {
      //           usenavigate("/homepage");
      //           localStorage.setItem("user", JSON.stringify(resp.email));
      //           toast.success("Login successful");
      //           sessionStorage.setItem("username", username);
      //         } else {
      //           toast.error("Invalid credentials");
      //         }
      //       } else {
      //         toast.error("Incorrect credentials");
      //       }
      //     }
      //   })
      //   .catch((err) => {
      //     toast.error("Login failed due to :" + err.message);
      //   });
    }
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.warning("Please enter email");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please enter password");
    }
    return result;
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  E Mail<span className="errmsg">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => emailUpdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Password<span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => passwordUpdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="card-footer">
              <button
                onClick={ProceedLogin}
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
              <Link className="btn btn-success" to={"/registration"}>
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
