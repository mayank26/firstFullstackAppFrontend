import React, { useEffect, useState, useContext } from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import AppHeader from "../core/AppHeader";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleSubmit = (event) => {
    // event.preventDefault()
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  useEffect(() => {
    document.title = "Singup";
  }, []);

  return (
    <>
      <AppHeader />
      <Card
        title="Sign up form"
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
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input
              type="name"
              name="name"
              id="name"
              placeholder=""
              value={name}
              onChange={(e) =>
                setValues({ ...values, error: false, name: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
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

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
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
        <h1>{JSON.stringify(values)}</h1>
      </Card>
    </>
  );
};

export default Signup;
