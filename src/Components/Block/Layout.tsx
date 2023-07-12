import React from "react";
import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <Header />
      <MidPart>
        <Outlet />
        <Sider />
      </MidPart>
      <Footer />
    </div>
  );
};

export default Layout;

const MidPart = styled.div`
  display: flex;
`;
