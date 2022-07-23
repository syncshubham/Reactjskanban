import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";

import Dropdown from "../Dropdown/Dropdown";
import { MdAdd } from "react-icons/md";
import "./Card.css";
import CardInfo from "./CardInfo/CardInfo";

function Card(props) {
  // const [showDropdown, setShowDropdown] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  // const { id, title, date, tasks, labels } = props.card;

  // const formatDate = (value) => {
  //   if (!value) return "";
  //   const date = new Date(value);
  //   if (!date) return "";

  //   const months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Aprl",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];

  //   const day = date.getDate();
  //   const month = months[date.getMonth()];
  //   return day + " " + month;
  // };

  return (
    <>
    <div className="taskerview" 
    draggable="true"
    onDragEndCapture={()=> props.dragEnded(props.card?.id, props.boardId)}
    onDragEnterCapture={()=> props.dragEntered(props.card?.id, props.boardId)}
    >
       <div className="taskerInfo">
        <p className="taskerName">
            Helpdesk <span className="moreHorizontal2"><MoreHorizontal/></span> <br></br>Inquiry
            
        </p>
        <p className="taskerPhoneNumber">
            +91 9870365338
        </p>
        <p className="taskerMoney">
            $ 25,000
        </p>
        </div>
      </div>

        {/* <div className="card_top">
          <div className="card_top_labels">
            {labels?.map((item, index) => (
              <label key={index} style={{ backgroundColor: item.color }}>
                {item.text}
              </label>
            ))}
          </div>
          <div
            className="card_top_more"
            onClick={(event) => {
              event.stopPropagation();
              setShowDropdown(true);
            }}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown
                class="board_dropdown"
                onClose={() => setShowDropdown(true)}
              >
                <p onClick={() => props.removeCard(props.boardId, id)}>
                  Delete Card
                </p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="card_title">{title}</div>
        <div className="card_footer">
          {date && (
            <p className="card_footer_item">
              <Clock className="card_footer_icon" />
              {formatDate(date)}
            </p>
          )}
          {tasks && tasks?.length > 0 && (
            <p className="card_footer_item">
              <CheckSquare className="card_footer_icon" />
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </p>
          )}
        </div> */}

    </>
  );
}

export default Card;
