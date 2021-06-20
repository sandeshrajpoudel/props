import React from "react";
import ReactDOM from "react-dom";
import {useState} from 'react'
import Backdrop from "./Backdrop";
import Modal from "./Modal";




function Todo(props) {
   const [showModal, setshowModal]= useState(false);
function deletehandler(){
setshowModal(true);
}
function closeModal(){
    setshowModal(false);
}

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={()=>deletehandler()}>Delete</button>
        </div>
       
      </div>
      {showModal? <Modal onCancel={closeModal} onConfirm={closeModal}/>:null} 
   
      {showModal? <Backdrop onClick={closeModal}/>: null}
        

    </div>
  );
}
export default Todo;


//{showModal? <Modal/>:null} 
// if show modal is true open modal  else retuen null
//show modal state is false initaially and after 
//clicking in delete button it will change to true 
//from function delete handler()...   
//{showModal? <Backdrop/>: null}
//if showmodal is true than use backdrop else null
