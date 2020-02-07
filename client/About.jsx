import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {

  setVar(){
    Session.set('Meteor.loginButtons.dropdownVisible', 'true');
  }

  render() {
    return(
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor amet kale chips bushwick hot chicken, fingerstache tumblr sriracha ugh venmo distillery prism direct trade +1 wolf. Selvage iceland venmo bitters gentrify. Unicorn banh mi 8-bit beard blue bottle, health goth vape sustainable succulents microdosing. Deep v pork belly raclette, shabby chic small batch sustainable hot chicken fixie authentic marfa prism. Plaid pok pok chicharrones, helvetica tumblr franzen photo booth everyday carry seitan brunch freegan sartorial disrupt. Marfa chartreuse semiotics, direct trade kickstarter distillery pok pok tacos raclette blog next level hashtag neutra.</p>
        <button onClick={this.setVar}>Sign up</button>
      </ReactCSSTransitionGroup>
    )
  }
}
