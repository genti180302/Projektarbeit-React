import React from "react";
import './PersonDashboard.scss'


const PersonDashboard = ({data}) => {

    
    return(
        <>
            <div className="whole-person-dashboard">
                <div className="person-title">
                    <img src={require('../../images/icon_web_user.png')} alt="foto"/>
                    <p> Person </p>
                </div>
                <div className="person-data">
                <p style={{display:'flex', marginTop:'10px'}}> <p style={{fontWeight:'bold', paddingRight:'120px'}}>Firstname</p> {data.firstName} </p>
                <p style={{display:'flex', marginTop:'25px'}}> <p style={{fontWeight:'bold', paddingRight:'121px'}}>Lastname</p> {data.lastName} </p>
                <p style={{display:'flex', marginTop:'25px'}}> <p style={{fontWeight:'bold', paddingRight:'47px'}}>Additional Information</p> {data.additionalInformation} </p>
                </div>
            </div>
        </>
    )
}

export default PersonDashboard;