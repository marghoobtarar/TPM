import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";

const Layout = ({ checkAuthenticated, load_user, children }) => {
  const [nav, setNav] = useState(true);
  useEffect(() => {
    if (
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/signup" &&
      window.location.pathname !== "/facebook" &&
      window.location.pathname !== "/google" &&
      window.location.pathname !== "/reset-password"
    ) {
      setNav(true);
    }

    checkAuthenticated();
    load_user();
  }, []);

  return (
    <div style={{ backgroundColor: nav ? "#C0C3C5" : "" }}>
      {nav ? <Nav /> : null}
    <div style={{backgroundColor:"#d4d6d7", paddingTop:"10px", paddingBottom:"50px"}}>
    {children}

    </div>
      <div className={nav ? "footer" : ""}>{nav ? <Footer /> : null}</div>
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
