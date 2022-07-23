import React from 'react';
import './Navigation.css';
import { MdAssessment,  MdSearch } from "react-icons/md";
import Form from 'react-bootstrap/Form';
const Navigation = () => {
  return (
        <div className="mainnavigation-div">
            <div className="nav-inner-div">
                <div className="icons-div">
                    <MdAssessment className='round-cr-ico icon-1'/>
                    <MdAssessment className='round-cr-ico icon-2'/>                
                </div>
                <div className="search-div">
                    <Form.Control size="lg" type="text" placeholder="Search any Lead Here " className='search-input-bar'/>
                    <MdSearch className='search-icon'/>
                </div>  
                <div className="btn-pro">
                  <button>Add Lead</button>
                    <img src={require('./navuserprofile.png')}/>
                </div>
            </div>
        </div>
  )
}

export default Navigation;
