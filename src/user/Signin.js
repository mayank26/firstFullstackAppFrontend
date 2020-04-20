import React, {useEffect, useState, useContext} from 'react'
import { Form, Input, Button, Checkbox, Card} from 'antd';
import AppHeader from '../core/AppHeader';


const Signin = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  // const context = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        // firebase.auth().createUserWithEmailAndPassword(email,password)
        // .then(res => {
        //     console.log(res)
        //     context.setUser({ email: res.user.email, uid: res.user.uid})
        // })
        // .catch((error) => {
        //     console.log(error)
        //     toast(error.message,{
        //         type: "error"
        //     })
        // })
    }

    const handleSubmit = (event) => {
        // event.preventDefault()
        alert(`Hello mayank ${password} ${email} `)
        handleSignUp()
	}
	
	useEffect(() => {
		document.title = "Singup"
		
	}, [])

    // if(context.user?.uid){
    //     return <Redirect to="/"/>
    // }



  return (
    <>  
    <AppHeader/> 
    <Card title="Sign up form" style={{ width: 600 , marginLeft: 200, marginRight: 200, marginTop: 100, alignContent: "center"}}>
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input 
                      type='email'
											name='email'
											id='email'
											placeholder=''
											value={email}
											onChange={e => setEmail(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password 
                      id='password'
											placeholder=''
											value={password}
											onChange={e => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
      </Form>
    </Card> 
    </>
  );
};

export default Signin





