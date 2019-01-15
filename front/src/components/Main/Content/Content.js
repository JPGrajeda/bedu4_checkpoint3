
import React, { Component } from 'react';

// Router
import { Route } from "react-router-dom";

import Landingpage from "../Landingpage/Landingpage";

// class Content extends Component {
//   render() {
//     return (
//         <div>
//           <Route exact path="/dashboard/" render={ ()=> <h1> ruta1 </h1> }></Route>
//           <Route exact path="/dashboard/1" render={ <h1> servicios </h1> }></Route>
//         </div>
//     )
//   }
// }

// export default Content;


const Content = ({match}) => (
    <div className="content">
        {console.log(`${match.url}ruta1`)}
        <Route path={`${match.url}ruta1`} component={ <Landingpage/> } />
    </div>
  );
  
  export default Content;