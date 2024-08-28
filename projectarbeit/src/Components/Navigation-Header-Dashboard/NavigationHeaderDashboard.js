import React from "react";
import './NavigationHeaderDashboard.scss'

const NavigationHeaderDashboard = () => {

    return(
        <>
            <div className="whole-navigation-header">
                <div className="home-image">
                    <img src={require("../../images/icon_web_home.png")} alt="Foto-1"/>
                </div>
                <div className="whole-second-navigation-text">
                    <img src={require("../../images/icon_web_arrow_right.png")} alt="Foto-2"/>
                    <p className="navigation-text"> Probearbeit - Dashboard </p>
                </div>
            </div>
        </>
    )
}

export default NavigationHeaderDashboard;