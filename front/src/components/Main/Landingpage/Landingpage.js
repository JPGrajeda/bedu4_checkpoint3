import React from 'react';

import Login from './Login/Login';
import NavBar from './Navbar/Navbar'
import FooterLogin from './Footer/Footer';
const Landingpage  = () => {

    return(

        <div>
           <div>
                <NavBar></NavBar>
           </div>
           <div>
                <Login></Login>
           </div>
           <div>
               <FooterLogin></FooterLogin>
           </div>
        </div>
        
    )

}

export default Landingpage;
