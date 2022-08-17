
import React, { useState, useEffect } from "react";
import "./Register.css";
import image6 from "../../assets/image-8.png";
import { Grid } from "@mui/material";
import ColorBlobs from "../colorBlobs/ColorBlobs";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate= useNavigate()

  useEffect(() => {

    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <Grid container className="registerPage" xs={12}>
      <Grid container className="banner">
          <Grid item className="regImg" width="50%" xs={9}>
          <h1 className="regPrompt">REGISTER TO JOIN OUR MISSION</h1>
            <img src={image6} id="img7" alt="ads image" width="100%" />
          </Grid>
        </Grid>
    <Grid container className="regContainer" xs={12}>
      <form method="POST" action="http://localhost:8000/signup/submit">
        <Grid container className="regForm" md={12} xs={12}>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              First Name
            </Grid>
            <Grid md={5} xs={10}>
              <input
              item className="input"
                type="text"
                name="firstName"
              />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              Last Name
            </Grid>
            <Grid item md={5} xs={10}>
              <input className="input"
                type="text"
                name="lastName"
              />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              Company Name
            </Grid>
            <Grid item md={5} xs={10}>
              <input
               className="input"
                type="text"
                name="business"
              />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              Email
            </Grid>
            <Grid item md={5} xs={10}>
              <input  className="input" type="text" name="email" />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              Address
            </Grid>
            <Grid item md={5} xs={10}>
              <input
              className="input" 
                type="text"
                name="address"
              />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              ZIP
            </Grid>
            <Grid item  md={5} xs={10}>
              <input 
              className="input"
              type="text" />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              City
            </Grid>
            <Grid item md={5} xs={10}>
              <input
               className="input"
                type="text"
                name="city"
              />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              State
            </Grid>
            <Grid item md={5} xs={10}>
              <input 
              className="input"
              type="text" />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              Country
            </Grid>
            <Grid item md={5} xs={10}>
              <input className="input" type="text"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="passwords" md={12} xs={12}>
          <Grid container className="first" xs={12}>
            <Grid item className="labelPass" md={12} xs={10}>
              Password
            </Grid>
            <Grid item md={12} xs={10}>
              <input
              className="input" 
                type="text"
                name="password"/>
            </Grid>
          </Grid>
          <Grid container className="first" xs={12}>
            <Grid item className="labelPass" md={12} xs={10}>
              Re-Enter Password
            </Grid>
            <Grid item md={12} xs={10}>
              <input className="input" type="text" />
            </Grid>
          </Grid>
          </Grid>
        <Grid item className="reg-btn" xs={12}>
        <div className="register">
           <button className="register-btn">Register</button>
        </div>
        </Grid>
      </form>
      <ColorBlobs/>
    </Grid>
    </Grid>
  );
};

export default Register;

