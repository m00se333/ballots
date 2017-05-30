import React from "react";
import {connect} from "react-redux";
import {push} from "react-router-redux";

import { browserHistory } from 'react-router'


class Dashboard extends React.Component{

    dashOption(route){
      
      browserHistory.push(route);
      console.log("changing route");

    }

    render(){

      const adminDash = "hello";
                          //change to the class "button wrapper" or something so CSS works correctly
      const studentDash = <div id="dashWrapper">
                            <div className="dashButton" onClick={() => {this.dashOption("/profile")}}>
                              <span>Profile</span>
                            </div>
                            <div className="dashButton" onClick={() => {this.dashOption("/ballots")}}>
                              <span>Ballots</span>
                            </div>
                          </div>

      const user = true;

      const userAccess = user ? studentDash : console.log("nope");



      //dashWrapper keep


      return(
          <div id="dashWrapper">
            {userAccess}
          </div>
        )
    }
}

const mapStateToProps = null;
const mapDispatchToProps = { push };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);