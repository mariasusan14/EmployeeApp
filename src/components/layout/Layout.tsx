import Header from "../header/header";
import "./Layout.css";
import { SideNav } from "../sideNav/SideNav";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/kv-logo.png";
import { Button } from "../button/Button";
export const Layout = () => {
  const navigate = useNavigate();
  function isLoggedIn(){
    if(localStorage.getItem("isLoggedIn")==="true") return true;
    else return false;
  }

  function handleLogut() {
    navigate("/");
    localStorage.setItem("isLoggedIn", "false");
  }

  if(!isLoggedIn()){
    return <Navigate to={"/"}/>
  }
  else{
  return (
    <>
      <Header
        className="containerHeader"
        image={<img id="kvlogo" src={logo} alt="kv-logo" width="300px" height="65px" />}
        endAdornment={
          <div className="endadornment">
            <Button
              type="button"
              title="Logout"
              onClick={handleLogut}
              variant="secondary"
              className="logout-btn"
            />
          </div>
        }
      />
      <SideNav />
      <Outlet />
    </>
  );
}
};

