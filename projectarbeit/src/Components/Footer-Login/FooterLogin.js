import React from "react";
import './FooterLogin.scss'
import {Link} from "react-router-dom"


const FooterLogin = () => {

    return(
        <> 
            <section className="Footer-Login-Section">
                    <ul>
                        <Link style={{textDecoration:'none',color:'black'}} to='/Privacy'><li>Privacy</li></Link>
                        <Link style={{textDecoration:'none',color:'black'}}to='Terms & Condition'><li>Terms & Conditions</li></Link>
                        <Link style={{textDecoration:'none',color:'black'}} to='Imprint'><li>Imprint</li></Link>
                    </ul>
            </section>
        </>
    )
}

export default FooterLogin;