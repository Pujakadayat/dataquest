
import { Component } from "react";
import "./Navbar.css";
// import {Home} from "./routes/Home";
// import {About} from "./routes/About";
// import {Template} from "./routes/Template";
// import {Service} from "./routes/Service";
// import {Signup} from "./routes/Signup";
import { menuitems} from "./menuitems";
import {Link} from "react-router-dom";

class  Navbar extends Component{
state={clicked:false};
handleClick =()=>{
    this.setState({clicked: !this.state.clicked})

  }
// const Navbar =()=>{

// const [isOpen, setOpen]=useState(false);
  render (){
    return (
        <>
          <nav className="Navbaritems">
          <h1 className ="navbar-logo">DataQuest</h1>
          <div className ="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ?
            "fas fa-times":"fas fa-bars"}></i>
           
          </div> 
          <ul className={this.state.clicked ?
           "nav-menu active":"nav-menu"}>
          {menuitems.map((item,index)=>{
            return(
              <li key ={index}>
           
          <Link  className={item.cName} to={item.url}>
          <i className={item.icon}></i>{item.title}
          </Link>  
          </li>
            );
          })}
         
             <button>Signup</button>

            </ul>
          </nav>
        </>
    );
}}
export default Navbar;