import React from 'react'
import {Link} from 'react-router-dom'
// import '../styles.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content } = Layout;


const AppHeader = () => {
    return (
    <Layout className="layout">
        <Header>
        <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/signin">Signin</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/signup">Signup</Link></Menu.Item>
            </Menu>
           </Header> 
    </Layout>
    )
}


export default AppHeader 

