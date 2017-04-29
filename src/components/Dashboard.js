import React from "react";
import {connect} from "react-redux";
import {push} from "react-router-redux";

import { browserHistory } from 'react-router'


class Dashboard extends React.Component{

    dashOption(route){
      //changes the route!
      browserHistory.push(route);

    }

    render(){
      return(
          <div id="dashWrapper">
            <div className="dashButton" onClick={() => {this.dashOption("/profile")}}>
              <span>Profile</span>
            </div>
            <div className="dashButton" onClick={() => {this.dashOption("/ballots")}}>
              <span>Ballot Entry</span>
            </div>
          </div>
        )
    }
}

const mapStateToProps = null;
const mapDispatchToProps = { push };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);