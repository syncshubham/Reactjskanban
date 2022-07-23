import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";
import { MdAdd } from "react-icons/md";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editabled/Editable";

import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="board"
    draggable>
      <div className="stagerow">
        <div className="innerStageRow">
        <h5 className="point">Stage 2 <span className="moreHorizontal"><MoreHorizontal/></span></h5>
        <p className="valuestage">Value (2,500) . Total (05)</p>
        </div>
      </div>

    <div className="board_cards custom-scroll">
    {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            // removeCard={props.removeCard}
            dragEnded={props.dragEnded}
            dragEntered={props.dragEntered}
            // updateCard={props.updateCard}
          />
        ))}

     <Editable/>
    </div>  
      {/* <div className="taskerview">
       <div className="taskerInfo">
        <p className="taskerName">
            Helpdesk Inquiry
            <span className="moreHorizontal2"><MoreHorizontal/></span>
        </p>
        <p className="taskerPhoneNumber">
            +91 9870365338
        </p>
        <p className="taskerMoney">
            $ 25,000
        </p>
        </div>
        <div className="taskerImg">
        </div>
      </div>
      <div className="add-section">
        <div className="con-add-icon">
          <MdAdd className='add-task'/><span className="add-h">Add New</span>
        </div>
      </div> */}


      {/* <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          <span>{props.board?.cards?.length || 0}</span>
        </p>
        <div
          className="board_header_title_more"
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard()}>Delete Board</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            removeCard={props.removeCard}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
            updateCard={props.updateCard}
          />
        ))}
        <Editable
          text="+ Add Card"
          placeholder="Enter Card Title"
          displayClass="board_add-card"
          editClass="board_add-card_edit"
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div> */}
    </div>
  );  
}

export default Board;
