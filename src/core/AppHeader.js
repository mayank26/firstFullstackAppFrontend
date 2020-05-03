import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper/index";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content } = Layout;

const AppHeader = () => {
  let history = useHistory();
  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "FFFFFF" };
    } else {
      return { color: "d1d1d1" };
    }
  };

  return (
    
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link style={currentTab(history, "/")} to="/">
              Home
            </Link>
          </Menu.Item>
          {!isAuthenticated() && (
            <Menu.Item key="2">
              <Link style={currentTab(history, "/signin")} to="/signin">
                Signin
              </Link>
            </Menu.Item>
          )}
          {!isAuthenticated() && (
            <Menu.Item key="3">
              <Link style={currentTab(history, "/signup")} to="/signup">
                Signup
              </Link>
            </Menu.Item>
          )}

          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <Menu.Item key="4">
              <Link style={currentTab(history, "/admin/dashboard")} to="/admin/dashboard">
                Admin
              </Link>
            </Menu.Item>
          )}

          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <Menu.Item key="4">
              <Link style={currentTab(history, "/user/dashboard")} to="/user/dashboard">
                Dashboard
              </Link>
            </Menu.Item>
          )}

          {isAuthenticated() && (
            <Menu.Item
              key="5"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              <Link to="/signout">Signout</Link>
            </Menu.Item>
          )}
        </Menu>
      </Header>
    
  );
};

export default withRouter(AppHeader);
