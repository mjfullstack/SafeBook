import React from "react";
import './style.css';
import { withRouter } from "react-router-dom";
// import { withState } from "recompose";
import 'typeface-roboto';

class FixedNavbar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      logged_in_status: props.logged_in_status
    }
  }

  handleSafeBookClick (e, logged_in_status) {
    e.preventDefault();
    console.log("FixedNavbar handleSafeBookClick - props.logged_in_status: ", logged_in_status);
    console.log("FixedNavbar handleSafeBookClick - this.state.logged_in_status: ", this.state.logged_in_status);
    if ( logged_in_status) {
      return this.props.history.push("/home");
    } else {
      return this.props.history.push("/");
    }
  }

  handleGoToSearchClick(event) {
    event.preventDefault();
    return this.props.history.push("/finduser");
  }

  render () {
    // const { logged_in_status, set_logged_in } = this.props;
    const { logged_in_status } = this.props;
    return (
      <div>

        {/* <nav className="navbar fixed-top tc" role="navigation"> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top float-right sb-navbar">
          <div className="container">
            {/* <button className='nav navbar-nav'  onClick={(event) => this.handleSafeBookClick(event, logged_in_status)}>SafeBook</button> */}
            <a className="navbar-brand float-left" rel="noopener noreferrer" href="#"
              onClick={(event) => this.handleSafeBookClick(event, logged_in_status)}
            ><i className="fas fa-home sb-ico-margin"></i>safebook</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" rel="noopener noreferrer" href="#"
                    onClick={(event) => this.handleSafeBookClick(event, logged_in_status)}
                  ><i className="fas fa-home sb-ico-margin"></i> Home
                        <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noopener noreferrer" href="#"
                    onClick={(event) => this.handleGoToSearchClick(event)}
                    ><i class="fas fa-search sb-ico-margin"></i>Search
                  </a>
                </li>
              </ul>
            </div>
          </div> {/* <!-- /.container-fluid for outside container --> */}
        </nav>







            {/* WAS FROM OLD NAVBAR */}
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            {/* <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="pull-left"><button target="_blank" rel="noopener noreferrer" href="#">Dashboard</button></li>
                <li className="active"><button target="_blank" rel="noopener noreferrer" href="#">Stories</button></li>
                <li><button target="_blank" rel="noopener noreferrer" href="#">Videos</button></li>
                <li><button target="_blank" rel="noopener noreferrer" href="#">Photos</button></li>
                <li className="social pull-right"><button href="#">Social Links</button></li>
              </ul>
            </div>    */}  {/* <!-- /.navbar-collapse --> */}
        {/* </nav> */}
        {/* </MuiThemeProvider> */}
      </div>
    )
  }
};

  export default withRouter (FixedNavbar);

