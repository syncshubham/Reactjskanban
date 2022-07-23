import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { X } from "react-feather";
import { Modal, ModalHeader } from "reactstrap";
import CardDetails from "../cardDetails/CardDetails";
import "./Editable.css";

function Editable(props) {
  const [isEditable, setIsEditable] = useState(false);
  // const [inputText, setInputText] = useState(props.defaultValue || "");

  // const submission = (e) => {
  //   e.preventDefault();
  //   if (inputText && props.onSubmit) {
  //     setInputText("");
  //     props.onSubmit(inputText);
  //   }
  //   setIsEditable(false);
  // };

  return (
   <div className="add-new-card">
    <Modal 
    size="1g"
    isOpen={isEditable}
    toggle={() => setIsEditable(!isEditable)}
    >
      <ModalHeader
      toggle={() => setIsEditable(!isEditable)}>
      <CardDetails/>
      </ModalHeader>
      </Modal>
          
    <div className="add-section" onClick={()=>setIsEditable(true)}>
      <div className="con-add-icon">
        <MdAdd className='add-task'/><span className="add-h">Add New</span>
      </div>
    </div>
   </div> 
    // <div className="editable">
    //   {isEditable ? (
    //     <form
    //       className={`editable_edit ${props.editClass ? props.editClass : ""}`}
    //       onSubmit={submission}
    //     >
    //       <input
    //         type="text"
    //         value={inputText}
    //         placeholder={props.placeholder || props.text}
    //         onChange={(event) => setInputText(event.target.value)}
    //         autoFocus
    //       />
    //       <div className="editable_edit_footer">
    //         <button type="submit">{props.buttonText || "Add"}</button>
    //         <X onClick={() => setIsEditable(false)} className="closeIcon" />
    //       </div>
    //     </form>
    //   ) : (
    //     <p
    //       className={`editable_display ${
    //         props.displayClass ? props.displayClass : ""
    //       }`}
    //       onClick={() => setIsEditable(true)}
    //     >
    //       {props.text}
    //     </p>
    //   )}
    // </div>

  );
}

export default Editable;
