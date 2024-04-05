'use client'
import React, { useState } from "react"
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import WizardImage from '../../../public/assets/images/wizard-one.jpg';

export default function Register() {

  const router = useRouter();

  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if(!email || !password) {
    //     return;
    // }
    setErrorMessage("");

    const res = await fetch('/api/Users', {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
    });

    if(!res.ok){
        const response = await res.json();
        setErrorMessage(response.message);
    } else {
        router.refresh();
        router.push("/signin")
    }
  };

  return (
    <div className="registration-page-wrapper">
      <Image className="imageContainer--background" src={WizardImage} alt="wizard reading from book" />
      <div className="image-full-screen-container">
        <Image 
              src={WizardImage} 
              alt="wizard reading from book" 
              priority={true} 
              quality={100} 
              className="imageContainer" 
        />
        <div className="overlay-of-image"></div>
      </div>
      <div className="form-registration-container">
        <form className="form-registration" onSubmit={handleSubmit} method="post">
          <h1 className="form-registration-header">Registration</h1>
          <label className="form-registration-label" htmlFor="username">Username</label>
          <input 
              id="username" 
              name="username" 
              onChange={handleChange} 
              className="form-registration-input" 
              value={formData.username}
              type="text" 
          />
          <label className="form-registration-label"htmlFor="email">Email</label>
          <input 
              id="email" 
              name="email" 
              onChange={handleChange} 
              className="form-registration-input" 
              value={formData.email}
              type="email" 
          />
          <label className="form-registration-label" htmlFor="password">Password</label>
          <input 
              id="password" 
              name="password" 
              onChange={handleChange} 
              className="form-registration-input" 
              value={formData.password}
              type="password" 
          />
          <button className="form-registration-button">Submit</button>
          <div className="form-registration-text--container">
            <p>Already have an account?</p>
            <Link className="form-registration-link-text" href="/signin">Signin</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
