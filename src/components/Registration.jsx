import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Registration = () => {
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [password, passwordChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [country, countryChange] = useState("india");
  const [address, addressChange] = useState("");
  const [gender, genderChange] = useState("male");

  const navigate = useNavigate();

  const Isvalidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (id === "" || id === null) {
      isproceed = false;
      errormessage += "username ";
    }
    if (password === "" || password === null) {
      isproceed = false;
      errormessage += "password ";
    }
    if (name === "" || name === null) {
      isproceed = false;
      errormessage += "name ";
    }
    if (email === "" || email === null) {
      isproceed = false;
      errormessage += "email ";
    }
    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter valid email");
      }
    }
    return isproceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, phone, country, address, gender };
    // console.log(regobj);
    if (Isvalidate()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered successfully");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => idChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => passwordChange(e.target.value)}
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => nameChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      E-mail <span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => emailChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      phone <span className="errmsg">*</span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => phoneChange(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country <span className="errmsg">*</span>
                    </label>
                    <select
                      value={country}
                      onChange={(e) => countryChange(e.target.value)}
                      className="form-control"
                    >
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      <option value="singapore">Singapore</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address </label>
                    <textarea
                      value={address}
                      onChange={(e) => addressChange(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender: </label>
                    <br />
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={(e) => genderChange(e.target.value)}
                      name="gender"
                      value="male"
                      className="app-check"
                    ></input>
                    <label>Male</label>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={(e) => genderChange(e.target.value)}
                      name="gender"
                      value="female"
                      className="app-check"
                    ></input>
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <Link className="btn btn-danger" to={"/"}>
                Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
