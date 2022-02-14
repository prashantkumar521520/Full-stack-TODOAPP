import react, { useState } from "react";
import { login } from "../actions/auth";

export default function Login() {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    console.log(fields);
    setFields({
      email: "",
      password: "",
    });

    login(fields).then((data) => {
      setLocalStorage("auth-token", data.jwttoken)
    });

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevfields) => ({
      ...prevfields,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <form onSubmit={handleForm}>
          <input
            className="px-3 py-1 m-2 border border-black"
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
          <input
            className="px-3 py-1 m-2 border border-black"
            type="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <button
            className="bg-blue-500 px-3 py-1 rounded-sm text-white font-semibold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
