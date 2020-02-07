import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class ResolutionDetail extends TrackerReact(Component) {

  constructor() {
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("userResolutions")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.resolutions.stop();
  }

  resolutions(){
    return Resolutions.findOne(this.props.id);
  }

  render() {
    let res = this.resolutions();

    if(!res){
      return(<div>Loading...</div>);
    }
    
    return(
      <div>
        <h1>{res.text}</h1>
      </div>
    )
  }
}
