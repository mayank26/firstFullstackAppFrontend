import React, {useState} from "react";
import { API } from "../backend";
import AppHeader from "../core/AppHeader";
import AppFooter from "../core/AppFooter";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import AddCategory from "../admin/AddCategory";
import AddProduct from "../admin/AddProduct";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const AdminDashboard = () => {

 const [option,setOption] = useState({
     choosedOption: "CATEGORY"
 })



  return (
    <>
    <Layout>
      <AppHeader/>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Category">
                <Menu.Item key="1" onClick={() => {setOption({choosedOption: "CATEGORY"})}}>Create Category</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Products">
                <Menu.Item key="5" onClick={() => {setOption({choosedOption: "PRODUCT"})}}>Create Products</Menu.Item>
                <Menu.Item key="6">Manage Products</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="Orders"
              >
                <Menu.Item key="9">Manage Orders</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        
        <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Admin Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
        {option.choosedOption === "PRODUCT" ? <AddProduct/> : <AddCategory/>}
         </Content>
      </Layout>
      </Layout> 
      </Layout>  
    </>
  );
};

export default AdminDashboard;
