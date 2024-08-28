import React from "react";
import '../../Components/Header-Login/HeaderLogin'
import HeaderLogin from "../../Components/Header-Login/HeaderLogin";
import MainLogin from "../../Components/Main-Login/MainLogin";
import FooterLogin from "../../Components/Footer-Login/FooterLogin";
import './Login.scss'

const Login = () => {
    return(
    <>
        <div className="first-page-login">
            <HeaderLogin/>
            <MainLogin/>
            <FooterLogin/>
        </div>
    </>
    )
}

export default Login;