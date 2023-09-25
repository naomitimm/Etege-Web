import "./auth.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthSocials from "../../../components/auth-social-media/AuthSocials";
import Logo from "../../../components/logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../thrunk/userThunks";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AuthPage = () => {
  const [addclass, setaddclass] = useState("");
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("login");
    // dispatch(logIn(data))
    try {
      const request = await axios.post("https://etege-api.onrender.com/v1/auth/login", data);

      if (request.status === 200) {
        navigate("/");
      } else if(request.status === 401){
		alert("check email and password");
	  }
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  const handleRegistration = async (event) => {
    event.preventDefault();
    console.log("login");
    // dispatch(logIn(data))
    try {
      const request = await axios.post("https://etege-api.onrender.com/v1/auth/register", data);

      if (request.status === 201) {
        navigate("/");
      } else if(request.status === 401){
		alert("check email and password");
	  }
    } catch (e) {
		console.log(e)
      alert(e.response.data.message);
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="auth">
      <div className={`container ${addclass}`} id="container">
        <div className="form-container  sign-up-container">
          <Logo />
          <form>
            <h1>Create Account</h1>
            <AuthSocials />
            <p className="option">Or use your email to register</p>
            <input
              name="name"
              type="name"
              placeholder="NAME"
              onChange={handleChange}
            />
			<input
              name="email"
              type="email"
              placeholder="EMAIL"
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="PASSWORD"
            />
            <button onClick={handleRegistration} type="submit">SIGNUP</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <Logo />
          <form>
            <h1>Login</h1>
            <AuthSocials />
            <p className="option">Or login with email and password</p>
            <input
              name="email"
              type="email"
              placeholder="EMAIL"
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="PASSWORD"
            />
            <Link to="">
              <p>Forgot password?</p>
            </Link>
            <button onClick={handleLogin}>LOGIN</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <div className="overlay-actions">
                <h1>Welcome back to Etege!</h1>
                <h3>
                  You've been missed. Keep connected with us by logging in to
                  your account.
                </h3>
                <div className="btn login">
                  <button
                    className="ghost"
                    id="signIn"
                    onClick={() => setaddclass("")}
                  >
                    LOGIN
                  </button>
                </div>
              </div>
            </div>
            <div className="overlay-panel overlay-right">
              <div className="overlay-actions">
                <h1>Welcome to Etege!</h1>
                <h3>
                  A healtier you at your fingertips. Register to start your
                  journey today.
                </h3>
                <div className="btn">
                  <button
                    className="ghost"
                    id="signUp"
                    onClick={() => setaddclass("right-panel-active")}
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
