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

        /*<>
            <header>
                <NavBar></NavBar>
            </header>

            <main class="valign-wrapper">

                <section className=''>
                    <Login></Login>
                </section>

            </main>

            <footer>
                <div className='container'>
                    FOOTER
                </div>
            </footer>

        </>*/
    )

}

export default Landingpage;
