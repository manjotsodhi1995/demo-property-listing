import React from "react";

export default function Header(props) {
  const user = localStorage.getItem("user");
  let loggedInUser;
  if (user) {
    loggedInUser = JSON.parse(user);
  }

  const logOut = () => {
    localStorage.removeItem("user");
    props.history.push("/");
  };

  return (
    <div className="header-wrapper">
      <div className="nav-mask" />
      <header>
        <button
          id="header-hamburger-icon"
          className="hamburger hamburger--slider"
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <nav className="left-nav">
          <a href="/property">Buy</a>
          <a href="/property">Rent</a>
        </nav>
        <div className="logo">
          <a href="/">
            <img
              src={require("../../assets/images/trillio-house.png")}
              style={{ width: "50px", height: "40px" }}
              alt=""
            />
            <span>DEMO</span>
          </a>
        </div>
        <nav className="right-nav">
          {loggedInUser && (
            <a href="/" className="nav-item-removed" onClick={logOut}>
              Logout
            </a>
          )}
          {!loggedInUser && (
            <a href="/login" className="nav-item-removed">
              Login
            </a>
          )}
        </nav>
        <nav className="right-nav">
          <a href="/property" className="nav-item-removed">
            List your rental
          </a>
        </nav>
      </header>
    </div>
  );
}
