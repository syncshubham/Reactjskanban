import React from 'react'
import Navigation from '../Components/navbar/Navigation';
import Sidebarfile from '../Components/sidebar/Sidebarfile';
import './Stagecomponentcss.css'
import { MdAdd } from "react-icons/md";

const StageComponent = () => {

  return (
      <div className="bg-div">
          <Navigation />
          <Sidebarfile />
          <div className="bottom-btn add-bottom-btn">
            <MdAdd />
          </div>
      </div>
    );
  };

export default StageComponent;
