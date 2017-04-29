import React from "react";

class StoreShell extends React.Component{

    render(){

        return(

            <div className="theBigWrapper">
              {React.cloneElement(this.props.children, this.props)}
            </div>

          )

    }
}

export default StoreShell;