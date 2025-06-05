import "./Login.css";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/input";
import logo from "../../assets/kv-logo.png";
import loginImg from "../../assets/kv-login.jpeg";
import { useEffect, useState, useRef } from "react";
//import { useMouse } from "../../hooks/useMouse";
import {useLocalStorage} from '../../hooks/useLocalStorage'
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api-service/auth/login.api";
export const Login = () => {
  const [userName, setUsername] = useState("");
  const [error,setError]=useState("")
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useLocalStorage("setPasswordCheckbox",false);

  const userNameRef = useRef<HTMLInputElement>(null);

  //const mouse = useMouse();
  const [login,{isLoading}]=useLoginMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (password.length < 8) {
      setPasswordError("Must be 8 characters Long");
    } else {
      setPasswordError("");
    }
    
  }, [password]); 

  useEffect(() => {
    if (userName.length > 20) {
      setUsernameError("Username must be less than 20 characters");
    } else {
      setUsernameError("");
    }
  }, [userName]);

  useEffect(() => {
    userNameRef.current?.focus();
  }, []);

  

  async function handleFormSubmit() {
login({email:userName,password:password})
.unwrap()
.then((response)=>{
  if(!response)
    throw new Error("Response not found")
localStorage.setItem("token",response.accessToken)
localStorage.setItem("isLoggedIn","true")
navigate("/employee");
})
.catch((error)=>{
  setError(error.data.error) 
})
    
  }

  function handleClear() {
    setUsername("");
  }


  return (
    <>
      <div className="container">
        <div className="leftcont">
          <div className="circle">
            <img
              src={loginImg}
              alt="kv-login"
              id="cirleimg"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="rightcont">
          <form className="form">
            <div className="login">
              <img src={logo} alt="kv-logo" width="200px" height="45px"></img>
              <div className="username-input-wrapper">
                <div className="username-transition">Username</div>
                <Input
                  type="email"
                  name="username"
                  placeholder="username"
                  className="userNameInp"
                  value={userName}
                  ref={userNameRef}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  endAdornment={
                    <button
                      className="clear"
                      onClick={handleClear}
                      disabled={userName.length === 0}
                    >
                      Clear
                    </button>
                  }
                />
              </div>
               <p className="errormsg">{usernameError}</p>
              <p className="errormsg">{error}</p>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                // endAdornment={
                //   <button className="clear" onClick={handleClear}>
                //     Clear
                //   </button>
                // }
              />
              <p className="errormsg">{password && passwordError}</p>
              <div className="checkbx">
                <Input
                  type="checkbox"
                  id="checkbox"
                  checked={showPassword}
                  onChange={() => {
                    setShowPassword(!showPassword);
                  }}
                />
                <p>Show Password</p>
              </div>
              <Button
                onClick={handleFormSubmit}
                type="button"
                title="Login"
                variant="primary"
                className="login-button"
                disabled={!password||!userName||isLoading}
              />
              
              {/* <div>{mouse.x}</div>
            <div>{mouse.y}</div> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
