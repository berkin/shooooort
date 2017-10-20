import React from "react";
import "../../assets/style/App.scss";
import Logo from "../../assets/img/shoooooort-logo.png";
import Shorten from "../containers/Shorten";

const App = () => (
  <div>
    <div>test</div>
    <div className="page-header">
      <h1 className="page-header__logo">
        <img src={Logo} alt="Shooooort" />
      </h1>
      <h2 className="page-header__tagline">
        The link shortener with a long name{" "}
      </h2>
    </div>
    <Shorten />
    <div>copyright</div>
  </div>
);

export default App;
