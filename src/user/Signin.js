import React, { useEffect, useState, useContext } from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import AppHeader from "../core/AppHeader";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
          performRedirect();
        }
      })
      .catch(console.log("Signin request failed"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        alert("Redirect to admin");
        return <Redirect to="/admin/dashboard" />;
      } else {
        alert("Redirect to user dashboard");
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  useEffect(() => {
    document.title = "Singup";
  }, []);

  return (
    <>
      <AppHeader />
      <Card
        title="Signin form"
        style={{
          width: 600,
          marginLeft: 200,
          marginRight: 200,
          marginTop: 100,
          alignContent: "center",
        }}
      >
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item label="Username" name="username">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder=""
              value={email}
              onChange={(e) =>
                setValues({ ...values, error: false, email: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password
              id="password"
              placeholder=""
              value={password}
              onChange={(e) =>
                setValues({ ...values, error: false, password: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Signin;
