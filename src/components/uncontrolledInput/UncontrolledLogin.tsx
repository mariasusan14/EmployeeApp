import "./UncontrolledLogin.css";
import LoginInput from "./LoginInput";
import { useRef, useEffect } from "react";
import kvLogo from "../../../public/assets/kv-logo.png";
import kvLoginImg from "../../../public/assets/kv-login.jpeg";
import Button from "./Button";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const clearButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

function clearUsername(){
  if(!usernameRef.current)return;
  usernameRef.current.value="";
  if(!clearButtonRef.current)return;
  clearButtonRef.current.disabled=true;

};
function clearPassword(){
  if(!passwordRef.current)return;
  passwordRef.current.value="";
};

function disableButton(value:string){
  
if(!clearButtonRef.current)return 
if(!value){
  clearButtonRef.current.disabled=true;
}
else{
clearButtonRef.current.disabled=false;
clearButtonRef.current.onclick=clearUsername
}
}

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form>
            <LoginInput
              id="login-username-input"
              label="Username"
              ref={usernameRef}
              endAdornment={
              <Button type="button" onClick={clearUsername} ref={clearButtonRef} disabled={true} >Clear</Button>
              }
              onChange={(event)=>disableButton(event.target.value)}
            />

            <LoginInput type="password" id="login-password-input" label="Password" ref={passwordRef} endAdornment={
              <Button type="button" onClick={clearPassword}>Clear</Button>
              }/>

            <Button type="submit" className="login-button">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;