import { useRouter } from "next/router";
import styles from "../styles/login.module.css";
import Image from "next/image";
export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    router.push("/Dashboard");
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleLogin}>
        <h1><Image src="/imagesJohn/Line.png" alt="Line" width={4} height={19}/> MANAGE COURSES </h1>
        <h5>
          SIGN IN
          <p className={styles.loginContainerParagraf}>
            Enter your credentials to access your account
          </p>
        </h5>

        <label>
          <p className={styles.loginContainerEmail}>Email</p>
          <input
            className={styles.loginContainerUserName}
            placeholder="Enter your email"
            type="text"
          />
        </label>
        <label>
          <p className={styles.loginContainerPassword}>Password</p>
          <input
            className={styles.loginContainerPassword2}
            placeholder="Enter your password"
            type="password"
          />
        </label>
        <input type="submit" value="SIGN IN" />
        <p className={styles.loginContainerParagraf2}>
          Forgot your password?
          <a className={styles.loginContainerAhref} href="">
            Reset Password
          </a>
        </p>
      </form>
    </div>
  );
}
