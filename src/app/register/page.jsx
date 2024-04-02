import Image from "next/image";
import Link from "next/link";
import WizardImage from '../../../public/assets/images/wizard-one.jpg';

export default function Register() {
  return (
    <div className="registration-page-wrapper">
      <Image className="imageContainer--background" src={WizardImage} />
      <div className="image-full-screen-container">
        <Image className="imageContainer" src={WizardImage} />
        <div className="overlay-of-image"></div>
      </div>
      <div className="form-registration-container">
        <form className="form-registration" action="">
          <h1 className="form-registration-header">Registration</h1>
          <label className="form-registration-label" htmlFor="username">Username</label>
          <input className="form-registration-input" type="text" />
          <label className="form-registration-label"htmlFor="email">Email</label>
          <input className="form-registration-input" type="email" />
          <label className="form-registration-label" htmlFor="password">Password</label>
          <input className="form-registration-input" type="password" />
          <button className="form-registration-button">Submit</button>
          <div className="form-registration-text--container">
            <p>Already have an account? </p>
            <Link className="form-registration-link-text" href="signin">Signin</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
