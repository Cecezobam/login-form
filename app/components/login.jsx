"use client";
import { Card, Input, Form, Button, message } from "antd";
import { useState } from "react";
import {useRouter} from "next/navigation";
export default function Login() {

var[ email,setEmail]=useState();
var[password,setPassword]=useState("");
var router = useRouter();

  function handleEmail(evt){
    setEmail(evt.target.value);
    
  }
  function handlePassword(evt){
  setPassword(evt.target.value);
    
  }
  function handleLogin(){
   if(email=="cece@yahoo.com"&& password=="12345"){
      message.success("login sucessful");
      router.push("/dashboard");
    }
    else{
      message.error("login fail");
    }
   
  }
  return (
    <Card title="My Login" className=" m-auto mt-40 sm:w-1/2">
      <p>Please Enter your Detail</p>
      <Form>
        <Form.Item>
          <Input placeholder="Enter Email" onChange={handleEmail} />
        </Form.Item>

        <Form.Item>
          <Input.Password placeholder="Enter Password" onChange={handlePassword}/>
        </Form.Item>
      </Form>
      <Button type="primary"onClick={handleLogin}>Login</Button>
    </Card>
  );
}
