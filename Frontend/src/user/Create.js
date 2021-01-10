import React, { useState } from "react";
import Base from "../Core/Base";
import { Link } from "react-router-dom";
import { createArticle } from "./coreapicall";

const Signup = () => {
  const [values, setValues] = useState({
    description: "",
    error: "",
    success: false,
  });

  const { description, error, success } = values;

  const handleChange = (descriptions) => (event) => {
    setValues({ ...values, error: false, [descriptions]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createArticle({ values })
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            description: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("request failed"));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label type="textarea" className="text-light">
                Description
              </label>
              <input
                className="form-control"
                onChange={handleChange("description")}
                type="text"
                value={description}
              />
            </div>

            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New blog was created successfully
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign up page" description="A page for user to sign up!">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </Base>
  );
};

export default Signup;
