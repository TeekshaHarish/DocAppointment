// import axios from "axios";
import Layout from "./../components/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import DoctorCard from "../components/DoctorCard";

const Home = () => {
  const [doctors, setDoctors] = useState();
  const getAllDoctors = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/v1/user/getAllDoctors`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      } else {
        message.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };
  useEffect(() => {
    getAllDoctors();
  }, []);

  return (
    <div>
      <Layout>
        <h1>Home</h1>
        <div className="d-flex">
          {doctors &&
            doctors.map((doctor) => {
              return <DoctorCard doctor={doctor} />;
            })}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
