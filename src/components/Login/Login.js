import React, { useState } from "react";
import "./Login.css";

import { signInWithGoogle } from "../../firebase";

export default function Login(props) {
  const [user, setuser] = useState(null);
  const signIn = async () => {
    const user = await signInWithGoogle();
    if (user) {
      const { displayName, email } = user;
      setuser({
        displayName,
        email
      });
      localStorage.setItem("user", JSON.stringify(user));
      props.history.push("/property");
    }
  };
  console.log("user", user);
  return (
    <div className="login-buttons">
      <button className="login-provider-button" onClick={signIn}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span> Continue with Google</span>
      </button>
    </div>
  );
}
