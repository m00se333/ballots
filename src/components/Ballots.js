import React from "react";


class Ballots extends React.Component{

  testObject(){

      const tester = {

        tourn1: {

          name: "Bradley",
          number: 1

        },
        tourn2: {

          name: "NSDA",
          number: 2

        },
        tourn3: {

          name: "TOC",
          number: 3

        }

      };


      return(
        <select name="" id="schoolSelector">
          {tester && Object.keys(tester).map(function(t, index) {
              return <option key={index}>{tester[t].name}</option>
          }.bind(this))}
        </select>
        );

  }

  render(){
    return(
        <div id="ballotsWrapper">
          {this.testObject()}

        </div>
      )
  }
}

export default Ballots;