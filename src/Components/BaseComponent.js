import React, { Component } from 'react';
import Header from'./Header.js';

class BaseComponent extends Component {

  constructor(props){
    super(props);
  }

  render() {
    var view="block";
    if(window.location =='http://localhost:3000/'){
      view="none";
    }
    return (
      <React.Fragment>
      {
        window.location !='http://localhost:3001/' && window.location !='http://localhost:3001/signup'?(<Header style = {{position: "fixed"}}/>):("")
      }
      {this.props.children}
      <footer className="page-footer fixed-bottom font-small footer-style">

        <div className="footer-copyright text-center py-3" style={{color:"white"}}>© 2019 Copyright:
          <a href="https://mdbootstrap.com/bootstrap-tutorial/" style={{color:"white"}}> CommentApp</a>
        </div>

      </footer>
      </React.Fragment>
    );
  }
}

export default BaseComponent;
