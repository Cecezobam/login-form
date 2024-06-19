"use client";
import { Input, Button, Form,Card } from "antd";
export default function Login() {
  return (
    <Card title= "My Login" className="w-1/2 m-auto mt-40">
      <p>Please Enter your Details</p>
      <Form>
        <Form.Item>
          
          <Input placeholder="Enter Email" />
        </Form.Item>

        <Form.Item>
          
          <Input.Password placeholder="Enter Password" />
        </Form.Item>
      </Form>
      <Button type="primary">Login</Button>
    </Card>
  );
}
