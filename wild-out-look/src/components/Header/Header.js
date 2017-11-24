import React, { Component } from 'react'; 
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header"> 
           <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
           <a className="navbar-brand" href="#">
                <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                Wild-Out-Look
            </a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
         
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav mr-auto">
               <li className="nav-item active">
                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Profile</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Messages</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Docs</a>
               </li>  
             </ul>
             <form className="form-inline my-2 my-lg-0">
               <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
               <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
             </form>
           </div>
         </nav>
      </div>
    );
  }
}

export default Header;