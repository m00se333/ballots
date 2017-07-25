import React from "react";
import {connect} from "react-redux";

import {activate, deactivate} from "../../actions/editActions.js"

class Item extends React.Component{

  render(){

    const {name, outRounds, prelims, notes} = this.props;
    const status = this.props.active === this.props.name ? {color: "red", flex: 2} : {color: "black", flex: 1}


    return(

         <div ref={name}
              id={name}
              className="details"
              onClick={()=> this.props.activate(name)}
              style={status}>
              
                
                <p>{name}</p>  

            </div>
      )
  }
}

const mapStateToProps = (state) =>{
  return {
    active: state.active,
  }
}

const mapDispatchToProps = {
  activate,
  deactivate
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
