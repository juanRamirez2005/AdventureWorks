import React from "react";
import UnknownUser from "../../assets/unknown-user.png";
import "../../styles/components/LogInInterface.css";
import { Inputs } from "../../components/Inputs";
import { useFetch } from "../../hooks/useFetch";

const LogInInterface = () => {
  const { postUser, parentID } = useFetch();
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      span: "First Name",
      errorMessage:
        "First name must be at least 2-10 characters and should not include any special character",
      pattern: "^[A-Za-z0-9]{2,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      span: "Last Name",
      errorMessage:
        "First name must be at least 2-10 characters and should not include any special character",
      pattern: "^[A-Za-z0-9]{2,16}$",
      required: true,
    },
    {
      id: 3,
      name: "companyName",
      type: "text",
      placeholder: "Company Name",
      span: "Company Name",
      errorMessage: "",
      required: true,
    },
    {
      id: 4,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone Name",
      span: "Phone Name",
      errorMessage: "",
      required: true,
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "Email",
      span: "Email",
      errorMessage: "Should be a valid email",
      required: true,
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "Password",
      span: "Password",
      errorMessage: "Password must be at least 8 characters",
      pattern: "^[A-Za-z0-9]{8,16}$",
      required: true,
    },
    {
      id: 7,
      type: "password",
      placeholder: "Confirm Password",
      span: "Confirm password",
      errorMessage: "Passwords does not match",
      pattern: values.password,
      required: true,
    },
  ];
  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    postUser(
      "https://localhost:7135/api/AdventureWorks/PostUser/",
      Object.fromEntries(data.entries())
    );
  }

  return (
    <div className="sing-in--container">
      <div className="div-container">
        <img src={UnknownUser} alt="no profile user" />
        <form className="form-user--container" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <Inputs
              key={input.id}
              {...input}
              values={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export { LogInInterface };
