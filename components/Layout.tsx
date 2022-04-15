import * as React from "react";
import Navigation from "./Navigation";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />

      {children}
    </>
  );
};

export default Layout;
