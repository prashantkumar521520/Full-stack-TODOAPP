import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { isAuth } from "../actions/auth";
import { useState,useEffect } from "react";
import { BASE_API_URL } from "../actions/auth";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      const authToken = localStorage.getItem("auth-token");
      const res = await fetch(`${BASE_API_URL}/getuser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      });

      const resjson = await res.json();

      console.log(resjson);

      if (resjson.userAuthenticated) {
        setIsAuthenticated(true);
      }

      console.log(isAuthenticated);
    };
    checkAuthentication();
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log(data);

    //   if(data.userAuthenticated){
    //     setIsAuthenticated(true)
    //     console.log("setting true!!!")
    //   }

    //   console.log(isAuthenticated)

    //   // data.userAuthenticated?()=>setIsAuthenticated(true):setIsAuthenticated(false);
    //   // console.log("data.userAuthenticated " + data.userAuthenticated);
    //   // console.log("isAuthenticated" + isAuthenticated);
    //   // if (!isAuthenticated) {
    //   //   console.log("redirecting " + isAuthenticated);
    //   //   //router.push("/login");
    //   // }
    // });
  }, []);

  // console.log("in index.js");

  // isAuth().then((response) => {
  //   setIsAuthenticated(response);
  // });

  // useEffect(() => {
  //   console.log("hello" + isAuthenticated);
  //   if (!isAuthenticated) {
  //     router.push("/login");
  //   }
  // }, []);

  // console.log("rendering " + isAuthenticated);
  return (
    <div>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Todo */}
        Create a Todo app interface, refer provided screenshots for design.
      </main>
    </div>
  );
}
