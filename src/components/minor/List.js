import React from "react";
import {connect} from "react-redux";

import Item from "./Item"


class List extends React.Component{


  render(){
      
      
      const { tournamentList } = this.props;
      const list = tournamentList.map((x,i)=>{ return <Item
                                                        name={x.name}
                                                        prelims={x.prelims}
                                                        outRounds={x.outRounds}
                                                        notes={x.notes}
                                                        key={x.name}/> }) //I hate programming, this works.

    return(
      <div className="pipeline">

        {tournamentList.length === 0 ? <p>Loading</p> : list}

      </div>
    )
  }

}



export default List;
