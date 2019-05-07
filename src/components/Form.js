import React, { Component } from 'react'

class Form extends Component{
  render(){

        if( this.props.formType == "airplane" ){
          
        }else if ( this.props.formType == "flight" ){
          return(
            <form>
              <label>Plane Model</label>
              <input type="text"/>
              <label>Date</label
              <input type="date" />
              <label>From</label>
              <input type="text"/>
              <label>To</label>
              <input type="text"/>
              <label>Plane</label>
              <select>
                <option value="temp">Temp</option>
                <option value="temp2">Temp2</option>
                //TODO get all planes as options
              </select>
              <input type="submit" value="Create"/>
            </form>
          )
        }else if ( this.props.formType == "search" ){
          return(
            <form>
              <label>From</label>
              <input type="text"/>
              <label>To</label>
              <input type="text"/>
              <input type="submit" value="Search"/>
              //TODO make this search Flights
            </form>
          )
        }
      }
    )
  }
}


export default Form
