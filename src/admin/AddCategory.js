import React, {useState} from 'react'
import { Form, Input, Button, Card, Alert } from "antd"
import {isAuthenticated} from "../auth/helper"
import {Link} from 'react-router-dom'
import {createCategory} from '../admin/helper/adminapicall'

const AddCategory = () => {

    const [state, setState] = useState({
        name: "",
        error: "",
        success: false
    })

    const {name,error,success} = state
    const {user, token} = isAuthenticated()


    const handleSubmit = (e) => {
        e.preventDefault()

        //api call 
        createCategory(user._id,token,{name})
        .then(data => {
            if(data.error){
                setState({
                    ...state,
                    error: true
                })
            } else {
                setState({
                    ...state,
                    success: true,
                    name: ""
                })
            }
        })
    }

    const successWarningMessage = () => {
        if(success){
            return <Alert message="Successfully created" type="success" />
        }
        if (error){
            return <Alert message="Error" type="error" />
        }
    }

    return (
        <div>
        {successWarningMessage()}
        <Card
        title="Create new category"
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
          <Form.Item label="Category" name="category">
            <Input
              type="name"
              name="name"
              id="name"
              placeholder="Write a new category here"
              value={name}
              onChange={(e) =>
                setState({ ...state, name: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Add
            </Button>
          </Form.Item>
        </Form>
      </Card>
        </div>
    )
}

export default AddCategory