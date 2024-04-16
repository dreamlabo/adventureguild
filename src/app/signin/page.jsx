
'use client'
import { useState } from 'react'
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import WizardImage from '../../../public/assets/images/wizard-juggling.jpg';
import { PiWarningCircleLight } from "react-icons/pi";



export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
      
    const res = await signIn("credentials", {
            email,
            password,
            callbackUrl: '/guildmember/dashboard/overview',
            redirect: false
          });
      
          if (res?.error) {
              setError("Invalid Credentials");
              return;
          }

        if (res?.ok) {
            router.refresh();
            router.push(res.url)
        }
    };

    return (
        <div className="registration-page-wrapper">
            <Image 
                src={WizardImage} 
                alt="wizard juggling" 
                priority={true} 
                quality={100} 
                className="imageContainer--background" 
            />
            <div className="image-full-screen-container">
                <Image className="imageContainer" src={WizardImage} alt="wizard juggling" />
                <div className="overlay-of-image"></div>
            </div>
            <div className="form-registration-container">
                <form onSubmit={handleSubmit} className="form-registration" action="">
                  <div className='form-header-container'>
                    <h1 className="form-registration-header">Signin</h1>
                    {error && <p className='form-error-message'>
                                <PiWarningCircleLight style={{fontSize: '20px',}}/>
                                <span>Invalid Credentials</span>
                              </p> 
                    }
                  </div>
                  <label className="form-registration-label"htmlFor="email">Email</label>
                  <input 
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-registration-input"
                      type="email"
                      name='email' 
                      value={email}
                  />
                  <label className="form-registration-label" htmlFor="password">Password</label>
                  <input 
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-registration-input" 
                      type="password" 
                      value={password}
                  />
                  <button className="form-registration-button">Signin</button>
                  <div className="form-registration-text--container">
                      <p>Don&apos;t have an account? </p>
                      <Link className="form-registration-link-text" href="/register">Register</Link>
                  </div>
                </form>
            </div>
        </div>
    ) 
}