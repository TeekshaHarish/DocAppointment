import React from "react";
import { Form, Input, message } from "antd";
import "../styles/RegisterStyles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:8080";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_API}/api/v1/user/register`, values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Registered scuucessfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };
  return (
    <div className="form-container">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="register-form"
      >
        <h1 className="text-center">Register</h1>
        <Form.Item label="name" name="name">
          <Input type="text" required />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <div className="">
          <Link to="/login">Already user login here</Link>
        </div>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </Form>
    </div>
  );
}
