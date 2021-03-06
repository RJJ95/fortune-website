import RegisterButton from "../../primitives/register-button/register-button";
import styles from "./register-section.module.css";

import MicrosoftLogo from "../../../media/images/microsoft-logo.svg";
import GoogleLogo from "../../../media/images/google-logo.svg";
import FacebookLogo from "../../../media/images/facebook-logo.svg";

const RegisterSection = () => (
  <div className={styles.wrapper} id="register-section">
    <h1>Why wait? Register now using your favorite platform.</h1>
    <div className={styles.registerButtonsContainer}>
      <RegisterButton
        RegisterButton={GoogleLogo}
        onClick={() =>
          (window.location.href = `${window.location.href}/.auth/login/google`)
        }
      />
      <RegisterButton RegisterButton={MicrosoftLogo} onClick={null} />
      <RegisterButton RegisterButton={FacebookLogo} onClick={null} />
    </div>
  </div>
);

export default RegisterSection;
