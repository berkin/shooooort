import React from "react";
import "../../assets/style/App.scss";
import Logo from "../../assets/img/shoooooort-logo.png";
import Shorten from "../containers/Shorten";

const App = () => (
  <div>
    <span>Hello</span>
    <div className="page-header">
      <h1 className="page-header__logo">
        <img src={Logo} alt="Shooooort" />
      </h1>
      <h2 className="page-header__tagline">
        The link shortener with a long name{" "}
      </h2>
    </div>
    <Shorten />
    <span>Copyright</span>
  </div>
);

export default App;
