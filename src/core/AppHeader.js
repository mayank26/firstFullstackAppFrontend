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
    <Layout className="layout">
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

          {isAuthenticated() && (
            <Menu.Item
              key="4"
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
    </Layout>
  );
};

export default withRouter(AppHeader);
