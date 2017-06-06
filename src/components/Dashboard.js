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

      const adminDash = <div id="buttonWrapper">
                            <div className="dashButton" onClick={() => {this.dashOption("/tournament")}}>
                              <span>Make a tournament</span>
                            </div>
                            <div className="dashButton" onClick={() => {this.dashOption("/profile")}}>
                              <span>Profile</span>
                            </div>
                            <div className="dashButton" onClick={() => {this.dashOption("/ballots")}}>
                              <span>Ballots</span>
                            </div>
                          </div>


                          //change to the class "button wrapper" or something so CSS works correctly
      const studentDash = <div id="buttonWrapper">
                            <div className="dashButton" onClick={() => {this.dashOption("/profile")}}>
                              <span>Profile</span>
                            </div>
                            <div className="dashButton" onClick={() => {this.dashOption("/ballots")}}>
                              <span>Ballots</span>
                            </div>
                          </div>

      const user = false;

      const userAccess = user ? studentDash : adminDash;



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