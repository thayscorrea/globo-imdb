import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="body-layout-admin">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
