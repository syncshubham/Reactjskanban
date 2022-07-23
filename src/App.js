import React, { useEffect, useState } from "react";
import Board from "./Components/Board/Board";
import Editable from "./Components/Editabled/Editable";
import './App.css';
import StageComponent from './stagepage/StageComponent';


function App() {
  const [boards,setBoards] = useState(
    JSON.parse(localStorage.getItem("mystorage")) || []
  // // [  {
  // //     id: Date.now() + Math.random()*2,
  // //     title:"To Do",
  // //     cards:[
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 1",
  // //         cursor:"move",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"First Card",
  // //           color:"pink"
  // //         }],
  // //         desc:"My first card",
  // //         date:"",
  // //       },
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 2",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"Second Card",
  // //           color:"blue"
  // //         }],
  // //         desc:"My second card",
  // //         date:"",
  // //       },
  // //     ],
  // //   },
  // //   {
  // //     id: Date.now() + Math.random()*2,
  // //     title:"To Do",
  // //     cards:[
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 1",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"First Card",
  // //           color:"pink"
  // //         }],
  // //         desc:"My first card",
  // //         date:"",
  // //       },
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 2",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"Second Card",
  // //           color:"blue"
  // //         }],
  // //         desc:"My second card",
  // //         date:"",
  // //       },
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 2",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"Second Card",
  // //           color:"blue"
  // //         }],
  // //         desc:"My second card",
  // //         date:"",
  // //       },
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 2",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"Second Card",
  // //           color:"blue"
  // //         }],
  // //         desc:"My second card",
  // //         date:"",
  // //       },
  // //     ],
  // //   },
  // //   {
  // //     id: Date.now() + Math.random()*2,
  // //     title:"To Do",
  // //     cards:[
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 1",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"First Card",
  // //           color:"pink"
  // //         }],
  // //         desc:"My first card",
  // //         date:"",
  // //       },
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 2",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"Second Card",
  // //           color:"blue"
  // //         }],
  // //         desc:"My second card",
  // //         date:"",
  // //       },
  // //     ],
  // //   },
  // //   {
  // //     id: Date.now() + Math.random()*2,
  // //     title:"To Do",
  // //     cards:[
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 1",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"First Card",
  // //           color:"pink"
  // //         }],
  // //         desc:"My first card",
  // //         date:"",
  // //       },
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 2",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"Second Card",
  // //           color:"blue"
  // //         }],
  // //         desc:"My second card",
  // //         date:"",
  // //       },
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 2",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"Second Card",
  // //           color:"blue"
  // //         }],
  // //         desc:"My second card",
  // //         date:"",
  // //       },
        
  // //     ],
  // //   },
  // //   {
  // //     id: Date.now() + Math.random()*2,
  // //     title:"To Do",
  // //     cards:[
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 1",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"First Card",
  // //           color:"pink"
  // //         }],
  // //         desc:"My first card",
  // //         date:"",
  // //       },
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 2",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"Second Card",
  // //           color:"blue"
  // //         }],
  // //         desc:"My second card",
  // //         date:"",
  // //       },
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 2",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"Second Card",
  // //           color:"blue"
  // //         }],
  // //         desc:"My second card",
  // //         date:"",
  // //       },
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 2",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"Second Card",
  // //           color:"blue"
  // //         }],
  // //         desc:"My second card",
  // //         date:"",
  // //       },
  // //       { 
  // //         id: Date.now() + Math.random()*2,
  // //         title:"Card 2",
  // //         tasks:[],
  // //         labels:[{
  // //           text:"Second Card",
  // //           color:"blue"
  // //         }],
  // //         desc:"My second card",
  // //         date:"",
  // //       },
  // //     ],
  // //   },
  // // ]
);

  useEffect(()=>{
    localStorage.setItem("mystorage", JSON.stringify(boards));
  }, [boards])

  //JSON.parse(localStorage.getItem("mystorage")) || []

 
  // if(myLocal){
  //   setBoards(JSON.parse(localStorage.getItem("myLStorage")));
  // };

  // useEffect(() => {
  //   localStorage.setItem("myLStorage", JSON.stringify(boards));
  // }, [boards]);

  
  //const syncBoards = localStorage.getItem("myStorage");

  // setBoards(
  //   JSON.parse(localStorage.getItem("prac-kanban")) || []
  // );

const [targetCard, setTargetCard] = useState({
  cid: "",
  bid: "",

  });

  const dragEnded = (cid, bid) => {

   

    // if(syncBoards){
    //   setBoards(JSON.parse(syncBoards));
    // } else{
    //   localStorage.setItem("myStorage", JSON.stringify([boards]));
    //   setBoards([boards])
    // }

    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((item) => item.id === bid);
    if (s_boardIndex < 0) return;

    s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
      (item) => item.id === cid
    );
    if (s_cardIndex < 0) return;

    t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
    if (t_boardIndex < 0) return;

    t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cid
    );
    if (t_cardIndex < 0) return;

    const tempBoards = [...boards];
    const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
    tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
    tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
    setBoards(tempBoards);
  };

  const dragEntered = (cid, bid) => {
    setTargetCard({
      cid,
      bid,
    });
  };

  // useEffect(() => {
  //   localStorage.setItem("prac-kanban", JSON.stringify(boards));
  // }, [boards]);


  return (
    <div>
        <StageComponent />
      <div className="app">
      <div className="app_boards_container">
        <div className="app_boards">
          {
            boards.map((item)=><Board
            key={item.id}
            board={item}
            dragEnded ={dragEnded}
            dragEntered={dragEntered}
            />)
          }
          </div>
            </div>
       
      </div>
    </div>
  );
}

export default App;