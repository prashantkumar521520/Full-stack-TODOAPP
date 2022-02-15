import react, { useState } from "react";
import { setLocalStorage, signup } from "../actions/auth";
import { useRouter } from "next/router";

export default function Register() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    console.log(fields);
    setFields({
      name: "",
      email: "",
      password: "",
    });
    const verifyCredentials = async () => {
      const data = await signup(fields);
      if (data.jwttoken) {
        setLocalStorage("auth-token", data.jwttoken);
        router.push("/");
      } else {
        alert("alert invalid credentials");
      }
    };

    verifyCredentials();
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
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
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
