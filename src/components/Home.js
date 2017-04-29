import React from "react";
import {connect} from "react-redux";

class Home extends React.Component{

    render(){
      return(
          <div id="loginBox">
            <form id="loginForm">
              <input type="text" defaultValue="username"/>
              <input type="text" defaultValue="password"/>
              <input type="button" value="button!"/>
            </form>
          </div>
        )
    }

}

const mapStateToProps = (state) => {
  return{
    data: state.data
  }
};

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
